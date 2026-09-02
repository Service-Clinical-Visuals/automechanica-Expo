const fs = require('fs');
const path = require('path');

const dir = 'e:/GithubWeb/Automechanika/automechanica-Expo/app/(moto)/inno';
const componentsDir = path.join(dir, '_components');
const cssPath = path.join(dir, 'global.css');

// 1. Update global.css
let css = fs.readFileSync(cssPath, 'utf8');
css = css.replace(/--font-sans: var\(--font-rubik\);/, '--font-sans: var(--font-inter);');
css = css.replace(/--font-heading: var\(--font-oswald\);/, '--font-heading: var(--font-exo-2);');
css = css.replace(/\.oswald,[\s\S]*?font-family: var\(--font-oswald\), 'Oswald', sans-serif;\n}/, `.exo2,\n.exo2-font {\n  font-family: var(--font-exo-2), 'Exo 2', sans-serif;\n}`);
css = css.replace(/\.rubik,[\s\S]*?font-family: var\(--font-rubik\), 'Rubik', sans-serif;\n}/, `.inter,\n.inter-font {\n  font-family: var(--font-inter), 'Inter', sans-serif;\n}`);

// Base layer modifications
css = css.replace(/font-family: var\(--font-rubik\), 'Rubik', sans-serif;/g, `font-family: var(--font-inter), 'Inter', sans-serif;`);
css = css.replace(/font-family: var\(--font-oswald\), 'Oswald', sans-serif;/g, `font-family: var(--font-exo-2), 'Exo 2', sans-serif;`);
css = css.replace(/font-weight: 600;/g, `font-weight: 700;`); // titles to bold

// Add global sizing to the base layer if not already present
if (!css.includes('h1 { font-size:')) {
  const sizingCSS = `
  h1 { font-size: 2.5rem; }
  @media (min-width: 1024px) { h1 { font-size: 3.5rem; } }
  
  h2 { font-size: 1.875rem; }
  @media (min-width: 1024px) { h2 { font-size: 2.25rem; } }
  
  h3 { font-size: 1.25rem; }
  @media (min-width: 1024px) { h3 { font-size: 1.5rem; } }
  
  h4 { font-size: 1.125rem; }
  
  p, .paragraph, span, div {
    font-size: 1rem;
  }
`;
  css = css.replace(/@layer base {/, `@layer base {${sizingCSS}`);
}

fs.writeFileSync(cssPath, css);
console.log('Updated global.css');

// 2. Update all components
const files = fs.readdirSync(componentsDir);

const classesToRemove = [
  'text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl',
  'lg:text-xs', 'lg:text-sm', 'lg:text-base', 'lg:text-lg', 'lg:text-xl', 'lg:text-2xl', 'lg:text-3xl', 'lg:text-4xl', 'lg:text-5xl', 'lg:text-6xl',
  'md:text-sm', 'md:text-[15px]', 'xl:text-4xl', 'xl:text-3xl', '2xl:text-5xl',
  'text-\\[14px\\]', 'text-\\[15px\\]', 'text-\\[16px\\]', 'text-\\[17px\\]', 'text-\\[18px\\]', 'text-\\[20px\\]', 'text-\\[24px\\]',
  'font-normal', 'font-medium', 'font-semibold', 'font-bold', 'font-black',
  'text-\\[#272727\\]', 'text-\\[#4B5563\\]', 'text-\\[#4c4c4c\\]', // let global text colors inherit where possible, but keep specific colors like red/orange? User said "dont hard code". Let's remove primary gray/black ones.
  'oswald', 'oswald-font', 'rubik', 'rubik-font'
];

files.forEach(file => {
  if (file.endsWith('.tsx') && file !== 'Button.tsx') {
    const filePath = path.join(componentsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Use regex to carefully strip those classes from className strings
    // We match className="..." and replace inside it
    const classNameRegex = /className="([^"]+)"/g;
    
    content = content.replace(classNameRegex, (match, classes) => {
      let cleanClasses = classes;
      
      classesToRemove.forEach(cls => {
        // Create regex to match the exact class with word boundaries
        // E.g. \btext-lg\b
        const regex = new RegExp(`\\b${cls}\\b`, 'g');
        cleanClasses = cleanClasses.replace(regex, '');
      });
      
      cleanClasses = cleanClasses.replace(/\s+/g, ' ').trim();
      
      if (cleanClasses === '') return ''; // remove className attribute entirely if empty
      return `className="${cleanClasses}"`;
    });

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${file}`);
    }
  }
});

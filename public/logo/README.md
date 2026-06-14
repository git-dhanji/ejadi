# Logo Directory

Store your logo files here for the Ejadi Interior website.

## 📂 Recommended Logo Files

Place these logo variations in this folder:

```
/public/logo/
├── logo-light.png          # Logo for light backgrounds (dark logo)
├── logo-dark.png           # Logo for dark backgrounds (white logo)
├── logo-icon.png           # Icon/symbol only (for favicon, mobile)
├── logo-full.png           # Full logo with text
└── logo.svg                # SVG version (recommended for scalability)
```

## 📏 Logo Specifications

### File Formats:
- **SVG** (Recommended): Scalable, small file size, perfect quality
- **PNG**: Transparent background, high resolution (2x for retina)
- **WebP**: Modern format, better compression

### Recommended Sizes:
- **Full Logo**: 300px - 400px width, transparent background
- **Icon Only**: 512x512px (square, for favicon)
- **Navbar Logo**: Will auto-resize, but 200px width is ideal

### Logo Variations Needed:
1. **Light Mode Logo** (Dark colored logo on light background)
2. **Dark Mode Logo** (White/light colored logo on dark background)
3. **Icon/Favicon** (Square symbol only, no text)

## 🎨 Design Guidelines

### Colors:
- Primary logo color should match your brand
- Ensure good contrast on both light and dark backgrounds
- Transparent background (PNG/SVG)

### Spacing:
- Include some padding/whitespace around the logo
- Don't make the logo too tight to edges

## 🔧 How to Use Your Logo

### Option 1: Update Logo Component (Recommended)

After placing your logo files, update `components/common/Logo.tsx`:

```tsx
import Image from 'next/image';

export const Logo = ({ isDarkTheme = false }: LogoProps) => {
  return (
    <Link href="/" className="flex items-center">
      <Image 
        src={isDarkTheme ? "/logo/logo-dark.png" : "/logo/logo-light.png"}
        alt="Ejadi Interior"
        width={180}
        height={50}
        priority
      />
    </Link>
  );
};
```

### Option 2: Using SVG (Best for Quality)

```tsx
export const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <img 
        src="/logo/logo.svg"
        alt="Ejadi Interior"
        className="h-12 w-auto"
      />
    </Link>
  );
};
```

### Option 3: Keep Current Text Logo + Add Icon

```tsx
<Link href="/" className="flex items-center gap-3">
  <Image 
    src="/logo/logo-icon.png"
    alt="EI"
    width={44}
    height={44}
  />
  <div className="flex flex-col">
    <span className="font-serif text-xl font-bold">Ejadi</span>
    <span className="text-xs font-semibold uppercase">Interior</span>
  </div>
</Link>
```

## 🖼️ Update Favicon Too!

After adding your logo icon, update the favicon:

1. Place your square logo icon here: `public/logo/logo-icon.png` (512x512px)
2. Convert to `.ico` format or use PNG
3. Update `app/layout.tsx` or add to `app/favicon.ico`

## ✅ Quick Start

1. **Prepare your logo files:**
   - Export in PNG or SVG format
   - Transparent background
   - High resolution (2x for retina)

2. **Add files to this folder:**
   ```
   public/logo/logo-light.png
   public/logo/logo-dark.png
   public/logo/logo-icon.png
   ```

3. **Update the Logo component:**
   - Edit `components/common/Logo.tsx`
   - Replace text logo with Image component
   - Use your new logo paths

4. **Test on the website:**
   - Check light and dark modes
   - Verify mobile display
   - Test all pages (navbar, footer)

## 📱 Logo Usage Locations

Your logo appears in:
- ✅ Navbar (top of every page)
- ✅ Footer (bottom of every page)
- ✅ Favicon (browser tab icon)
- ⚠️ Loading screen (if you add one)
- ⚠️ Email templates (if used)

---

**Current Status:** Using text-based logo ("EI" + "Ejadi Interior")
**To Update:** Place your logo files here and modify `components/common/Logo.tsx`

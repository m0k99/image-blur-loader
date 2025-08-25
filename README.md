# Image Blur Loader

A modern React component library for creating beautiful blur-to-sharp image loading experiences with blurhash support and dark mode compatibility.

## ✨ Features

- 🖼️ **Blurhash Integration** - Generate beautiful blur placeholders from hash strings
- 🌙 **Dark Mode Support** - Seamless theme switching with proper contrast
- ⚡ **Performance Optimized** - Lazy loading with smooth transitions
- 🎨 **Customizable** - Easy to style and integrate into any design system
- 📱 **Responsive** - Works perfectly on all device sizes
- 🔧 **TypeScript** - Full type safety and IntelliSense support

## 🚀 Demo

Experience the smooth blur-to-sharp loading effect with our interactive product catalog demo.

## 📦 Installation

```bash
  npm install blurhash
  # or
  yarn add blurhash
  # or
  pnpm add blurhash
```

## 🛠️ Usage

### Basic BlurImage Component

```tsx
import { BlurImage } from '@/components/blur-image'

function ProductCard() {
return (
<BlurImage
    src="https://example.com/image.jpg"
    alt="Product image"
    hash="LGF5]+Yk^6#M@-5c,1J5@[or[Q6."
    width={400}
    height={300}
    className="rounded-lg"
    />
  )
}
```

### Product Grid with Blur Loading

```tsx
import { ProductGrid } from '@/components/product-grid'

function App() {
return (
    <div className="container mx-auto">
    <h1>Our Products</h1>
    <ProductGrid />
    </div>
  )
}
```

### Dark Mode Integration

```tsx
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeToggle } from '@/components/theme-toggle'

function Layout({ children }) {
return (
    <ThemeProvider>
        <header>
          <ThemeToggle />
        </header>
        <main>{children}</main>
    </ThemeProvider>
  )
}
```

## 🎯 API Reference

### BlurImage Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Image source URL |
| `alt` | `string` | - | Alt text for accessibility |
| `hash` | `string` | - | Blurhash string for placeholder |
| `width` | `number` | - | Image width |
| `height` | `number` | - | Image height |
| `className` | `string` | - | Additional CSS classes |
| `priority` | `boolean` | `false` | Load image with high priority |

### Theme Configuration

The project uses `next-themes` for theme management:

```tsx
// Supported themes
type Theme = 'light' | 'dark' | 'system'

// Theme hook
const { theme, setTheme } = useTheme()
```

## 🏗️ Project Structure

```
image-blur-loader/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx           # Main product catalog page
│   ├── globals.css        # Global styles and theme variables
│   └── api/
│       └── products/
│           └── route.ts   # Product data API endpoint
├── components/
│   ├── blur-image.tsx     # Main blur image component
│   ├── product-card.tsx   # Individual product card
│   ├── product-grid.tsx   # Product grid layout
│   ├── theme-provider.tsx # Theme context provider
│   └── theme-toggle.tsx   # Dark/light mode toggle
└── README.md
```

## 🎨 Styling

The project uses Tailwind CSS with custom theme variables for seamless dark mode support:


## 🔧 Development

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/image-blur-loader.git
   cd image-blur-loader
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌟 Key Features Explained

### Blurhash Integration
- Generates tiny placeholder images from hash strings
- Creates smooth loading transitions
- Reduces perceived loading time
- Maintains aspect ratios during load

### Performance Optimizations
- Lazy loading for images outside viewport
- Canvas-based blur generation
- Optimized re-renders with proper memoization
- Next.js Image component integration

### Accessibility
- Proper alt text support
- Keyboard navigation
- Screen reader compatibility
- High contrast mode support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Blurhash](https://blurha.sh/) - For the amazing blur placeholder algorithm
- [Next.js](https://nextjs.org/) - For the incredible React framework
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - For the beautiful component library

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/image-blur-loader?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/image-blur-loader?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/image-blur-loader)
![GitHub license](https://img.shields.io/github/license/yourusername/image-blur-loader)

---

Made with ❤️ by [Mohammadreza khalilikhorram](https://github.com/m0k99)

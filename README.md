# ProTom - Wooden Frame Houses Website

Welcome to the ProTom project! This is a modern, responsive website built with Next.js showcasing wooden frame houses.

## Features

✅ **Responsive Design** - Works perfectly on all devices  
✅ **Product Gallery** - Beautiful image carousel for showcasing houses  
✅ **Blog/Actaulności** - Share news and updates with customers  
✅ **Admin Panel** - Manage blog posts and content  
✅ **Modern UI** - Navy blue and gold color scheme  
✅ **Fast Performance** - Built with Next.js for optimal speed  

## Project Structure

```
ProTom/
├── pages/              # Next.js pages
│   ├── index.js       # Home page
│   ├── co.js          # About wooden frame houses
│   ├── dla-kogo.js    # Target customers
│   ├── po-co.js       # Mission and motivation
│   ├── oferta.js      # Product offerings
│   ├── blog.js        # Blog/News
│   ├── admin.js       # Admin panel
│   ├── _app.js        # App wrapper
│   └── _document.js   # Document structure
├── components/        # Reusable React components
│   ├── Navigation.js  # Sticky navigation menu
│   ├── Navigation.css # Navigation styles
│   └── Footer.js      # Footer component
├── styles/           # Global and component styles
│   ├── globals.css   # Global styles and design system
│   └── Oferta.css    # Product gallery styles
├── public/           # Static assets
├── package.json      # Dependencies and scripts
├── next.config.js    # Next.js configuration
└── .gitignore        # Git ignore rules

```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/WinoGrono11/ProTom.git
cd ProTom
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server

## Navigation

- **Home** - Welcome and introduction
- **Co** - Information about wooden frame houses
- **Dla Kogo** - Target audience and customers
- **Po Co** - Mission and purpose
- **Oferta** - Product gallery and offerings
- **Blog** - Latest news and updates
- **Admin** - Admin panel for managing content

## Admin Panel

Access the admin panel at `/admin` to:
- Create new blog posts
- Delete existing posts
- Manage all website content

## Design System

### Colors
- **Navy Blue**: `#001F3F` - Primary color for text and background
- **Gold**: `#FFD700` - Accent color for headings and highlights
- **White**: `#FFFFFF` - Background and text

### Typography
- Font Family: Arial, sans-serif
- Responsive font sizing

## Deployment

### Deploy to GitHub Pages

1. Update `next.config.js` for static export
2. Build the project: `npm run build`
3. Push to `gh-pages` branch
4. Enable GitHub Pages in repository settings

## Contributing

Contributions are welcome! Please feel free to submit pull requests.

## License

This project is private and owned by WinoGrono11.

## Support

For questions or issues, please contact the project owner or open an issue on GitHub.

---

**Built with ❤️ using Next.js**
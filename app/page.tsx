import ProductGrid from "@/components/product-grid"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Grid3X3, List } from "lucide-react"
import { ThemeToggle } from "@/components/ThemeToggle"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Product Catalog</h1>
              <p className="text-muted-foreground mt-1">Discover our amazing collection</p>
            </div>

            {/* Search and Filters */}
            <div className="flex lg:flex-row flex-col items-center gap-3">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search products..." className="pl-10 lg:w-64" />
              </div>
              <div className="w-full flex items-center gap-3 justify-end">
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
                <div className="flex border rounded-md">
                  <Button variant="ghost" size="icon" className="rounded-r-none">
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-l-none border-l">
                    <List className="h-4 w-4" />
                  </Button>
                </div>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductGrid />
      </main>
    </div>
  )
}

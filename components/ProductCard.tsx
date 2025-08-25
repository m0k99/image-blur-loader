"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import BlurImage from "./BlurImage"

type Product = {
  id: number
  name: string
  price: number
  stock: number
  image: { url: string; hash: string }
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 py-0">
      <CardContent className="p-0">
        <div className="aspect-square relative">
          <BlurImage src={product.image.url} hash={product.image.hash} alt={product.name} className="w-full h-full" />
          <div className="absolute top-3 right-3">
            <Badge variant={product.stock > 10 ? "default" : product.stock > 0 ? "secondary" : "destructive"}>
              {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
            </Badge>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">${product.price}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

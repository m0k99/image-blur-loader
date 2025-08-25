"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import BlurImage from "./BlurImage"
import useSWR from "swr"

type Product = {
  id: number
  name: string
  price: number
  stock: number
  image: { url: string; hash: string }
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function ProductTable() {
  const { data: products } = useSWR<Product[]>("/api/products", fetcher)

  if (!products) return <p>Loading...</p>

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Stock</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>
              <BlurImage src={product.image.url} hash={product.image.hash} alt={product.name} />
            </TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>${product.price}</TableCell>
            <TableCell>{product.stock}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

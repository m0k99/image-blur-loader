// app/api/products/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 120,
      stock: 10,
      image: {
        url: "https://picsum.photos/id/101/1000/1000",
        hash: "LHKB{tyY_Ms-Q7R5DiMykqMxV@%g"
      }
    },
    {
      id: 2,
      name: "Product 2",
      price: 85,
      stock: 5,
      image: {
        url: "https://picsum.photos/id/102/1000/1000",
        hash: "LyO.${%Loyof~RW;bIbcTdS6V[W;"
      }
    },
    {
      id: 3,
      name: "Product 3",
      price: 99,
      stock: 20,
      image: {
        url: "https://picsum.photos/id/1013/1000/1000",
        hash: "LHKnPGDi~BD%^*%MNbt8aeM{D*tQ"
      }
    },
    {
      id: 4,
      name: "Product 4",
      price: 140,
      stock: 12,
      image: {
        url: "https://picsum.photos/id/104/1000/1000",
        hash: "LVI5[L8{ackr_NNGpIogcFo~niVr"
      }
    },
    {
      id: 5,
      name: "Product 5",
      price: 110,
      stock: 7,
      image: {
        url: "https://picsum.photos/id/1055/1000/1000",
        hash: "L}NTH_j[fkof_Nj[j[ayf9j[ayWB"
      }
    },
    {
      id: 6,
      name: "Product 6",
      price: 75,
      stock: 18,
      image: {
        url: "https://picsum.photos/id/106/1000/1000",
        hash: "LVI5[L8{ackr_NNGpIogcFo~niVr"
      }
    },
    {
      id: 7,
      name: "Product 7",
      price: 95,
      stock: 22,
      image: {
        url: "https://picsum.photos/id/107/1000/1000",
        hash: "L=Jb85kBWCoe~qazj@ay-=jtfQay"
      }
    },
    {
      id: 8,
      name: "Product 8",
      price: 150,
      stock: 14,
      image: {
        url: "https://picsum.photos/id/108/1000/1000",
        hash: "LMRV,^_N%NIA.TWBt7RjR4RjIUof"
      }
    },
    {
      id: 9,
      name: "Product 9",
      price: 130,
      stock: 9,
      image: {
        url: "https://picsum.photos/id/109/1000/1000",
        hash: "LiLzB6~pE4sl_3-;WYWB9#bct6Rk"
      }
    },
    {
      id: 10,
      name: "Product 10",
      price: 100,
      stock: 16,
      image: {
        url: "https://picsum.photos/id/110/1000/1000",
        hash: "LJINKOE19dI[}vIVNubb5qkAxF$#"
      }
    },
    {
      id: 11,
      name: "Product 11",
      price: 180,
      stock: 8,
      image: {
        url: "https://picsum.photos/id/111/1000/1000",
        hash: "LqG+2FoyofWB~otQofay%eoyt6t6"
      }
    },
    {
      id: 12,
      name: "Product 12",
      price: 70,
      stock: 30,
      image: {
        url: "https://picsum.photos/id/112/1000/1000",
        hash: "LSI#3?SjWBt7UH%Loeof?vxuWVR+"
      }
    },
    {
      id: 13,
      name: "Product 13",
      price: 160,
      stock: 11,
      image: {
        url: "https://picsum.photos/id/113/1000/1000",
        hash: "LvI5##%Nxut6~ps:xat5%MWBjuoL"
      }
    },
    {
      id: 14,
      name: "Product 14",
      price: 115,
      stock: 13,
      image: {
        url: "https://picsum.photos/id/114/1000/1000",
        hash: "L3HLk-00RQIW00~T-nW;02bJNIt6"
      }
    },
    {
      id: 15,
      name: "Product 15",
      price: 105,
      stock: 25,
      image: {
        url: "https://picsum.photos/id/115/1000/1000",
        hash: "LZGR}2D%IUNG~Wt7M{Rj-oofWWay"
      }
    },
    {
      id: 16,
      name: "Product 16",
      price: 95,
      stock: 19,
      image: {
        url: "https://picsum.photos/id/116/1000/1000",
        hash: "L9C$flRk0#E30XxD~AxZ01R+9u-T"
      }
    },
    {
      id: 17,
      name: "Product 17",
      price: 135,
      stock: 6,
      image: {
        url: "https://picsum.photos/id/117/1000/1000",
        hash: "L7BMSjR*00NIDNIq~pocM{E3?Gxt"
      }
    },
    {
      id: 18,
      name: "Product 18",
      price: 155,
      stock: 17,
      image: {
        url: "https://picsum.photos/id/118/1000/1000",
        hash: "LbGudlt7Rjae?wR*WAayb{oJaykB"
      }
    },
    {
      id: 19,
      name: "Product 19",
      price: 125,
      stock: 21,
      image: {
        url: "https://picsum.photos/id/119/1000/1000",
        hash: "LFPGjXt7IUxu~qfQayRjM{IU%MWB"
      }
    },
    {
      id: 20,
      name: "Product 20",
      price: 145,
      stock: 15,
      image: {
        url: "https://picsum.photos/id/120/1000/1000",
        hash: "L04xn~4xMgy805?oRkRS:SV_x:Wq"
      }
    }
  ]

  return NextResponse.json(products)
}
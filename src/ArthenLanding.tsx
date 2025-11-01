import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from './components/ui/badge'
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './components/ui/dialog'
import { Label } from './components/ui/label'
import {
  NativeSelect,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'

const fallbackCatalog = [
  {
    id: 'p1',
    name: 'ClimaSense A12',
    price: 1199,
    tag: 'Más elegido',
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p2',
    name: 'EcoTherm Aqua 80L',
    price: 899,
    tag: 'Top eficiencia',
    rating: 4.7,
    img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p3',
    name: 'SilentBreeze S9',
    price: 1399,
    tag: 'Silencioso',
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1600&auto=format&fit=crop',
  },
]

type Product = (typeof fallbackCatalog)[number]

type JourneyStep = {
  title: string
  description: string
}

type ValueProp = {
  title: string
  description: string
}

const journey: JourneyStep[] = [
  {
    title: 'Diagnóstico en 48h',
    description:
      'Un especialista visita tu hogar, evalúa consumos y define la solución óptima para tu tipo de vivienda.',
  },
  {
    title: 'Instalación premium',
    description:
      'Coordinamos todo con instaladores certificados Arthen. Sin obras eternas ni sorpresas en la factura.',
  },
  {
    title: 'Acompañamiento continuo',
    description:
      'Monitorizamos el rendimiento, optimizamos consumos y resolvemos incidencias con soporte 24/7.',
  },
]

const valueProps: ValueProp[] = [
  {
    title: 'Bienestar sostenible',
    description:
      'Tecnología de climatización, agua y luz que prioriza eficiencia energética y confort máximo.',
  },
  {
    title: 'Financiación flexible',
    description:
      'Opciones desde 0% TAE, con cuotas adaptadas al ahorro energético proyectado para tu hogar.',
  },
  {
    title: 'Garantía Arthen 5 años',
    description:
      'Cobertura total en piezas, mano de obra y revisiones, con reposición en 72h si algo falla.',
  },
]

const categories = [
  { id: 'clima', label: 'Climatización' },
  { id: 'agua', label: 'Agua caliente' },
  { id: 'luz', label: 'Iluminación' },
]

const installers = [
  {
    name: 'Sello Arthen Pro',
    copy: 'Instaladores homologados, con verificación de calidad y protocolos de seguridad reforzados.',
  },
  {
    name: 'Cobertura nacional',
    copy: 'Más de 120 equipos en toda España para intervenir en menos de 72h donde lo necesites.',
  },
  {
    name: 'Atención dedicada',
    copy: 'Canal prioritario para incidencias de instaladores y seguimiento en tiempo real del proyecto.',
  },
]

const guarantees = [
  {
    title: 'Garantía total 5 años',
    copy: 'Incluye desplazamiento, piezas y mano de obra. Si no reparamos en 72h, cambiamos el equipo.',
  },
  {
    title: 'Ahorro garantizado',
    copy: 'Si no alcanzas el ahorro estimado en el estudio energético, devolvemos la diferencia anual.',
  },
  {
    title: 'Seguro de confianza',
    copy: 'Cobertura ante daños eléctricos y filtraciones relacionadas con la instalación de Arthen.',
  },
]

function useCatalog(): Product[] {
  const [items, setItems] = React.useState<Product[]>(fallbackCatalog)

  React.useEffect(() => {
    let active = true
    fetch('/catalog.json')
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error('Catalog fetch failed'))))
      .then((data: Product[]) => {
        if (active && Array.isArray(data) && data.length) {
          setItems(data)
        }
      })
      .catch(() => {
        // quietly keep fallback catalog
      })
    return () => {
      active = false
    }
  }, [])

  return items
}

export default function ArthenLanding() {
  const catalog = useCatalog()
  const [activeCategory, setActiveCategory] = React.useState(categories[0].id)
  const [homeType, setHomeType] = React.useState('')
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null)

  const openProduct = React.useCallback((product: Product) => {
    setSelectedProduct(product)
    setDialogOpen(true)
  }, [])

  return (
    <div className="bg-[--sand] text-[--ink]">
      <header className="relative isolate overflow-hidden bg-white">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#fefaf4] via-white to-[#dcecf0]" />
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-24 lg:flex-row lg:items-center">
          <div className="max-w-xl space-y-6">
            <Badge className="bg-[--petrol]/10 text-[--petrol]">Nuevo ecosistema hogar 2025</Badge>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 lg:text-5xl">
              Bienestar sostenible pensado para hogares que lo quieren todo
            </h1>
            <p className="text-lg text-slate-600">
              Diseñamos, instalamos y mantenemos climatización, agua y luz con una experiencia premium de principio a fin.
              Siente la calma de un hogar eficiente, saludable y bello.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => setDialogOpen(true)}>Quiero mi estudio personalizado</Button>
              <Button variant="ghost">Habla con un especialista</Button>
            </div>
            <div className="flex items-center gap-4 pt-4 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <span className="text-lg font-semibold text-slate-900">4.9/5</span>
                <span>clientes felices</span>
              </div>
              <div className="h-4 w-px bg-slate-200" />
              <span>+12.000 hogares transformados</span>
            </div>
          </div>
          <motion.div
            className="relative w-full max-w-lg rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-[0_25px_60px_-15px_rgba(15,82,87,0.25)] backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-none bg-transparent shadow-none">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold text-slate-900">
                  Tu hogar, nuestra hoja de ruta
                </CardTitle>
                <p className="text-sm text-slate-500">
                  Cuéntanos cómo vives y te proponemos la combinación óptima de climatización, agua y luz.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="home-type">Tipo de vivienda</Label>
                  <Select onValueChange={setHomeType}>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Selecciona" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="piso">Piso</SelectItem>
                      <SelectItem value="casa">Casa</SelectItem>
                      <SelectItem value="atico">Ático</SelectItem>
                      <SelectItem value="unifamiliar">Unifamiliar</SelectItem>
                    </SelectContent>
                    <NativeSelect />
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Prioridad principal</Label>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {['Eficiencia', 'Salud', 'Diseño', 'Silencio'].map((item) => (
                      <button
                        key={item}
                        className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-left font-medium text-slate-600 hover:border-[--petrol] hover:text-[--petrol]"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-900 px-4 py-3 text-white">
                  <p className="text-sm font-medium">Ahorro estimado</p>
                  <p className="text-2xl font-semibold">hasta 42% en tu factura anual</p>
                  <p className="text-xs text-slate-200">Calculado según hogares similares de {homeType || 'Madrid'}.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16">
        <section className="space-y-10">
          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-slate-900">Elige cómo quieres sentir tu hogar</h2>
                <p className="text-slate-600">
                  Cada categoría combina equipos conectados, instalación a medida y servicio técnico proactivo.
                </p>
              </div>
              <TabsList>
                {categories.map((cat) => (
                  <TabsTrigger key={cat.id} value={cat.id}>
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            {categories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="grid gap-6 md:grid-cols-3">
                {catalog.map((product) => (
                  <Card key={`${cat.id}-${product.id}`} className="flex flex-col overflow-hidden border-slate-200 bg-white">
                    <div
                      className="relative h-48 w-full overflow-hidden"
                      style={{
                        backgroundImage: `url(${product.img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <div className="absolute left-4 top-4">
                        <Badge className="bg-white/90 text-[--petrol] shadow">{product.tag}</Badge>
                      </div>
                    </div>
                    <CardHeader className="space-y-1">
                      <CardTitle className="text-lg text-slate-900">{product.name}</CardTitle>
                      <p className="text-sm text-slate-500">Valoración {product.rating.toFixed(1)}</p>
                    </CardHeader>
                    <CardContent className="mt-auto space-y-3">
                      <p className="text-2xl font-semibold text-[--petrol]">
                        {new Intl.NumberFormat('es-ES', {
                          style: 'currency',
                          currency: 'EUR',
                          maximumFractionDigits: 0,
                        }).format(product.price)}
                      </p>
                      <Button onClick={() => openProduct(product)} className="w-full">
                        Ver detalle premium
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {valueProps.map((item) => (
            <Card key={item.title} className="border-slate-200 bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-slate-600">{item.description}</CardContent>
            </Card>
          ))}
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-12 shadow-[0_20px_50px_-30px_rgba(15,82,87,0.45)]">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl space-y-4">
              <Badge className="bg-[--petrol]/10 text-[--petrol]">Instaladores certificados</Badge>
              <h2 className="text-3xl font-semibold text-slate-900">
                Equipos obsesionados con el detalle para un acabado impecable
              </h2>
              <p className="text-slate-600">
                Supervisamos cada instalación con checklists propios y herramientas IoT que aseguran rendimiento óptimo desde el
                minuto uno.
              </p>
            </div>
            <div className="grid flex-1 gap-6 md:grid-cols-3">
              {installers.map((item) => (
                <div key={item.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.7fr_1fr]">
          <div className="space-y-4">
            <Badge className="bg-white/60 text-[--petrol]">Garantía Arthen</Badge>
            <h2 className="text-3xl font-semibold text-slate-900">Tranquilidad radical: nos encargamos siempre</h2>
            <p className="text-slate-600">
              Contratos transparentes, soporte humano real y mantenimiento predictivo para que solo te ocupes de disfrutar tu
              hogar.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {guarantees.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-10">
          <h2 className="text-3xl font-semibold text-slate-900">Tu viaje con Arthen</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {journey.map((step, index) => (
              <div key={step.title} className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[--petrol]/10 text-lg font-semibold text-[--petrol]">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Nos pondremos en contacto contigo</DialogTitle>
          </DialogHeader>
          {selectedProduct ? (
            <div className="space-y-4">
              <p className="text-sm text-slate-600">
                Gracias por interesarte en {selectedProduct.name}. Un especialista Arthen te llamará para diseñar la propuesta a
                medida y resolver dudas.
              </p>
              <Button className="w-full" onClick={() => setDialogOpen(false)}>
                Cerrar
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-sm text-slate-600">
                Déjanos tus datos en la siguiente pantalla y recibirás tu estudio personalizado en menos de 48 horas.
              </p>
              <Button className="w-full" onClick={() => setDialogOpen(false)}>
                Entendido
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'calculo-ach-nave-industrial',
    title:
      '¿Cómo calcular los cambios de aire por hora (ACH) necesarios en una nave industrial?',
    excerpt:
      'Guía técnica para determinar el número de renovaciones de aire necesarias en espacios industriales según su uso, volumen y carga térmica.',
    category: 'Ventilación Industrial',
    date: '2025-01-15',
    readTime: '8 min',
    image: '/img/ACH.png',
    content: [
      'El cálculo de cambios de aire por hora (ACH, por sus siglas en inglés: Air Changes per Hour) es un parámetro fundamental en el diseño de sistemas de ventilación industrial. Determina cuántas veces el volumen total de aire de un espacio es renovado en una hora.',
      'Para calcular el ACH necesario, primero debemos conocer el volumen del espacio (largo × ancho × alto). Luego, según el tipo de actividad que se realice en la nave, se establece un valor recomendado de renovaciones por hora. Por ejemplo, un almacén convencional puede requerir entre 3 y 6 ACH, mientras que una zona con alta carga de calor o gases puede necesitar de 10 a 20 ACH.',
      'La fórmula básica es: ACH = (Caudal de aire en m³/h) / (Volumen del espacio en m³). El caudal de aire se obtiene de la suma de los caudales de los extractores y ventiladores instalados.',
      'Es importante considerar factores adicionales como la carga térmica interna (maquinaria, iluminación, personal), la temperatura exterior, la humedad relativa y la distribución del flujo de aire dentro de la nave. Un diseño deficiente puede generar zonas muertas sin renovación adecuada.',
      'En Proreg realizamos este cálculo técnico antes de instalar cualquier sistema de extracción o ventilación industrial, garantizando que el flujo de aire cumpla con las normativas y necesidades específicas de cada planta.',
    ],
  },
  {
    slug: 'mantenimiento-compresores-scroll',
    title:
      'Mantenimiento preventivo en compresores scroll y semiherméticos: Guía para talleres frigoríficos',
    excerpt:
      'Procedimientos clave de mantenimiento preventivo para extender la vida útil de compresores scroll y semiherméticos en sistemas de refrigeración comercial e industrial.',
    category: 'Mantenimiento',
    date: '2025-02-10',
    readTime: '10 min',
    image: '/img/compresores.png',
    content: [
      'Los compresores scroll y semiherméticos son el corazón de los sistemas de refrigeración comercial e industrial. Su correcto mantenimiento preventivo es esencial para evitar fallas costosas y asegurar la eficiencia energética del sistema.',
      'El mantenimiento preventivo debe incluir la revisión periódica de los niveles de aceite refrigerante, ya que un nivel bajo puede causar daños severos en los componentes internos del compresor. Se recomienda verificar el aceite cada 3 a 6 meses según el uso.',
      'Otro aspecto crítico es la detección de fugas de gas refrigerante. Las fugas no solo reducen la eficiencia del sistema, sino que pueden causar sobrecalentamiento del compresor. Utilizamos detectores electrónicos de fugas y métodos de inspección con ultravioleta para localizarlas con precisión.',
      'La limpieza de condensadores y evaporadores también forma parte del mantenimiento esencial. Un condensador sucio aumenta la presión de condensación, lo que se traduce en mayor consumo eléctrico y reducción de la vida útil del compresor.',
      'En Proreg ofrecemos pólizas de mantenimiento programado que incluyen diagnóstico de eficiencia energética, limpieza de componentes críticos, revisión de presiones y temperaturas de operación, y reemplazo de refacciones originales cuando es necesario.',
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

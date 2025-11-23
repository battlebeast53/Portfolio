import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";

export function CodeShowcase() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const codeExamples = [
    {
      language: "javascript",
      title: "Express API Route",
      code: `// Optimized MongoDB Query with Indexing
app.get('/api/products', async (req, res) => {
  const { category, inStock } = req.query;
  
  const products = await Product.find({
    category,
    stock: inStock ? { $gt: 0 } : { $gte: 0 }
  })
  .sort({ createdAt: -1 })
  .limit(20)
  .lean();
  
  res.json({ products });
});`,
    },
    {
      language: "javascript",
      title: "AI Integration - Gemini API",
      code: `// Batch Prompt Engineering for Travel Planning
async function generateItinerary(destination, days) {
  const prompt = \`Create a \${days}-day travel itinerary for \${destination}.
Include: activities, hotels, restaurants, and routes.\`;

  const result = await model.generateContent({
    contents: [{ role: 'user', parts: [{ text: prompt }] }]
  });

  return parseItinerary(result.response.text());
}`,
    },
    {
      language: "cpp",
      title: "Competitive Programming",
      code: `// Efficient Algorithm - Binary Search Implementation
int binarySearch(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    
    return -1;
}`,
    },
    {
      language: "javascript",
      title: "React Component",
      code: `// Reusable Product Card Component
function ProductCard({ product }) {
  const { name, price, image, stock } = product;
  
  return (
    <Card className="overflow-hidden hover:shadow-lg">
      <img src={image} alt={name} className="w-full h-48" />
      <CardContent className="p-4">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-2xl font-bold">₹{price}</p>
        <Badge variant={stock > 0 ? 'success' : 'destructive'}>
          {stock > 0 ? 'In Stock' : 'Out of Stock'}
        </Badge>
      </CardContent>
    </Card>
  );
}`,
    },
  ];

  const copyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="code" className="py-24 px-4 bg-muted/30" data-testid="section-code">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-testid="text-code-title">
          Code Showcase
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Real code snippets from my projects demonstrating clean architecture, efficient algorithms,
          and modern development practices
        </p>

        <Tabs defaultValue="0" className="w-full">
          <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto gap-2 bg-transparent mb-6">
            {codeExamples.map((example, index) => (
              <TabsTrigger
                key={index}
                value={index.toString()}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                data-testid={`tab-code-${index}`}
              >
                {example.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {codeExamples.map((example, index) => (
            <TabsContent key={index} value={index.toString()}>
              <Card className="overflow-hidden" data-testid={`card-code-${index}`}>
                <div className="bg-[#1e1e1e] px-4 py-3 flex items-center justify-between border-b border-border/10">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="ml-4 text-sm font-mono text-gray-400">
                      {example.title}.{example.language === "cpp" ? "cpp" : "js"}
                    </span>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyCode(example.code, index)}
                    className="h-8 text-gray-400 hover:text-white"
                    data-testid={`button-copy-${index}`}
                  >
                    {copiedIndex === index ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <div className="overflow-x-auto">
                  <SyntaxHighlighter
                    language={example.language}
                    style={vscDarkPlus}
                    showLineNumbers
                    customStyle={{
                      margin: 0,
                      borderRadius: 0,
                      background: "#1e1e1e",
                      fontSize: "0.875rem",
                    }}
                  >
                    {example.code}
                  </SyntaxHighlighter>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

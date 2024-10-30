import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "../ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function MutipleOrdersStatus() {
  return (
    <section className="mb-12 relative">
      <div className="absolute inset-0  opacity-50 rounded-full blur-3xl -z-10"></div>
      <h2 className="text-2xl font-semibold mb-4">Multiple Orders Status</h2>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Multiple Orders Status</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-800 hover:bg-gray-800 text-gray-50">
                <TableHead className="text-slate-200">Parameters</TableHead>
                <TableHead className="text-slate-200">Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-gray-900">key</TableCell>
                <TableCell className="text-gray-900">Your API key</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-gray-900">action</TableCell>
                <TableCell className="text-gray-900">status</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-gray-900">orders</TableCell>
                <TableCell className="text-gray-900">
                  Order IDs separated by comma
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Accordion type="single" collapsible className="mt-4">
            <AccordionItem value="response-example">
              <AccordionTrigger className="bg-slate-100 px-2">
                Response Example
              </AccordionTrigger>
              <AccordionContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  {JSON.stringify(
                    {
                      status: "success",
                      data: {
                        "23501": {
                          status: "In progress",
                          start_count: 0,
                          remains: 1000,
                        },
                        "23502": {
                          status: "Completed",
                          start_count: 500,
                          remains: 0,
                        },
                      },
                    },
                    null,
                    2
                  )}
                </pre>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
}

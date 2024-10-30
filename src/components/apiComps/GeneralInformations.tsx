import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export default function GeneralInformations() {
  return (
    <section className="mb-12 relative">
      <div className="absolute inset-0  opacity-50 rounded-full blur-3xl -z-10"></div>
      <h2 className="text-2xl font-semibold mb-4">General Information</h2>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>General Information</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-800 hover:bg-gray-800 text-white">
                <TableHead className="text-slate-200">Field</TableHead>
                <TableHead className="text-slate-200">Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium text-gray-900">
                  HTTP Method
                </TableCell>
                <TableCell className="text-gray-900">POST</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-gray-900">
                  API URL
                </TableCell>
                <TableCell className="text-gray-900">
                  https://smmstore.com/api/v2
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-gray-900">key</TableCell>
                <TableCell className="text-gray-900">Your API key</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-gray-900">
                  Response format
                </TableCell>
                <TableCell className="text-gray-900">JSON</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
}

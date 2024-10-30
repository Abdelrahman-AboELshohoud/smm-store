import { useTranslateContext } from "../context/TranslateContext";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function Translator() {
  const { language, changeLanguage } = useTranslateContext();
  return (
    <Select value={language} onValueChange={changeLanguage}>
      <SelectTrigger className="w-[120px] absolute top-2 right-10 z-20 bg-white ">
        <SelectValue defaultValue={language} className="text-sm font-medium">
          {language === "en" ? "English" : "العربية"}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="ar" dir="rtl">
            العربية
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

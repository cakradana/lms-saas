"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/utils";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { subjects } from "@/constants";

const SubjectFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("subject") || "";

  const [subject, setSubject] = useState(query);

  useEffect(() => {
    const params = searchParams.toString();
    let newUrl = null;

    if (subject === "all" || subject === "") {
      newUrl = removeKeysFromUrlQuery({ params, keysToRemove: ["subject"] });
    } else {
      newUrl = formUrlQuery({ params, key: "subject", value: subject });
    }

    if (newUrl) {
      router.push(newUrl, { scroll: false });
    }
  }, [subject, router, searchParams]);

  return (
    <Select onValueChange={setSubject} value={subject} defaultValue={subject}>
      <SelectTrigger className="input capitalize min-lg:min-w-44">
        <SelectValue placeholder="Subject" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all" className="capitalize">
          All Subjects
        </SelectItem>
        {subjects.map((subject, index) => (
          <SelectItem key={index} value={subject} className="capitalize">
            {subject}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
export default SubjectFilter;

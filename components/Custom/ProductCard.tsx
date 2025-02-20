"use client"
import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "../ui/separator";

export interface ProductCardProps {
 type?: string;
  title: string;
  description: string;
  moreInfo: string;
  imageUrl: string;
}

export function ProductCard({ title, description, moreInfo, imageUrl, type }: ProductCardProps) {
    const router = useRouter()
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="w-[350px] rounded-xl overflow-hidden shadow-md">
        <CardHeader className="p-0 m-0 rounded-xl">
        <div className="relative w-full h-[350px] rounded-xl">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
        </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold capitalize flex gap-2 items-center">{title} {type && (<span className="flex gap-2 items-center"><Separator orientation="vertical" className="h-7"/><span>{type}</span></span>)}</CardTitle>
        <motion.div
          animate={{ height: expanded ? "auto" : "60px" }}
          className="overflow-hidden"
        >
          <CardDescription className="text-muted-foreground mt-1">
            {description}
            <span className={`${expanded ? "inline" : "hidden"}`}>
              {" "}{moreInfo}
            </span>
          </CardDescription>
        </motion.div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 p-4">
        <Button
          variant="link"
          className="p-0 text-primary font-semibold text-center w-full text-gold"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read Less ↑" : "Read More →"}
        </Button>
        <Button className="w-full bg-gold hover:bg-gold/80 text-white" onClick={()=>{router.push(`/products/${title}`)}}>
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
}

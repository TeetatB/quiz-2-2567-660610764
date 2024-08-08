"use client";
import React, {useState} from "react";
import { PostOwnerProps } from "@/libs/types";

export default function PostOwnner({piurl,pname,pText,plikenum}:PostOwnerProps) {
  return (
  <div className = "border-bottom">
      <img src={piurl} width="90px" className="rounded-circle me-4"></img>
      <span className="text-center display-6 me-auto">{pname}</span>
      <span className="text-white">{pText}</span>
      <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span style={{ color: "#B0B3B8" }}>{plikenum}</span>
      </div>  
  </div>
    );
}

import React from "react";
import tags from "./tags.json";
import styled from "styled-components";

const TagTitulo = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
  margin: 0;
`;
const Tag = styled.button`
  font-size: 24px;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
`;

const TodasTags = styled.div`
  display: flex;
  align-items: center;
  padding: 56px 0;
  flex-wrap: wrap;
  gap: 24px;
`;

export const Tags = () => {
  return (
    <>
      <TodasTags>
        <TagTitulo>Busque por tags:</TagTitulo>

        {tags.map((tag) => (
          <Tag key={tag.id}>{tag.titulo}</Tag>
        ))}
      </TodasTags>
    </>
  );
};
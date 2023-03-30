import React from "react";
import Image from "next/image";
import cn from "classnames";

interface Prop {
  size: { width: number; height: number };
  [x: string]: any;
}

const Picture: React.FC<Prop> = ({
  src,
  alt="my Image",
  className,
  size = { width: 50, height: 50 },
  ...props
}) => {
  return (
    <>
      <Image
        className={cn(props.style, className)}
        src={src}
        width={size.width}
        height={size.height}
        alt={alt}
        {...props}
      />
    </>
  );
};

export default Picture;

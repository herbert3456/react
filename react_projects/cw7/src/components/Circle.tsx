type CircleProps = {
  color: string;
  radius: number;
};

const Circle = ({ color, radius }: CircleProps) => {
  return (
    <div
      style={{
        width: radius * 2,
        height: radius * 2,
        backgroundColor: color,
        borderRadius: "50%",
        margin: "10px",
        display: "inline-block",
      }}
    />
  );
};

export default Circle;
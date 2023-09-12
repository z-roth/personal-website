const MenuItem = ({ title, description }) => {
  return (
    <div className="my-2">
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="text-md italic">{description}</p>
    </div>
  );
};

export default MenuItem;

const DescAbout = ({ description }: { description: string }) => {
  return (
    <div className="mb-8">
      <h4 className="mb-4 font-semibold">About the place</h4>
      <p className="text-gray-400 whitespace-pre-line">{description}</p>
    </div>
  );
};

export default DescAbout;

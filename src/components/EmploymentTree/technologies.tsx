export default function Technologies({
  technologies,
}: {
  technologies: string[];
}) {
  return (
    <div className="flex-start">
      {technologies &&
        technologies.map((technology, index) => (
          <div
            className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
            key={index}
          >
            {technology}
          </div>
        ))}
    </div>
  );
}

type Task = {
  title?: string;
  epxlain: string[];
};

const Item = ({ items }: { items: string[] }) => {
  return (
    <ul className="flex flex-col gap-y-2 pl-8">
      {items.map((item: string, idx: number) => (
        <li
          key={"taskItem" + idx}
          className="list-disc whitespace-pre-wrap text-gray-600"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

const CaseItem = ({
  title,
  data,
}: {
  title?: string;
  data: string[] | Task[];
}) => {
  const isTaskArray = (value: string[] | Task[]): value is Task[] => {
    return value.length > 0 && typeof value[0] === "object";
  };

  return (
    <div className="my-6">
      <h4 className="mb-2 text-lg font-semibold">{title}</h4>

      {isTaskArray(data) ? (
        <div className="flex flex-col gap-4">
          {data.map((item: Task, idx: number) => (
            <div key={title ?? "case" + idx}>
              {item.title && (
                <h5 className="mb-2 pl-4 font-semibold text-gray-800">
                  {item.title}
                </h5>
              )}

              <Item items={item.epxlain} />
            </div>
          ))}
        </div>
      ) : (
        <Item items={data} />
      )}
    </div>
  );
};

export default CaseItem;

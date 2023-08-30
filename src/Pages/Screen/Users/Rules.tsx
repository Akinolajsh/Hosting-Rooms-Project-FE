const Rules = () => {
  const data: any = [
    {
      title: "House rules",
      first: "Check-in: 2:00 PM - 10:00 PM",
      second: "Checkout before 12:00 PM",
      third: "3 guests maximum",
      more: "Show more",
    },
    {
      title: "Safety & property",
      first: "No carbon monoxide alarm",
      second: "No smoke alarm",
      third: "Pet(s) live on property",
      more: "Show more",
    },
    {
      title: "Cancellation policy",
      first:
        "Add your trip dates to get the cancellation details for this stay",
      more: "Add dates",
    },
  ];

  return (
    <div className="w-full flex justify-center items-center mt-3 mb-3">
      {/* main */}
      <div className="w-[80%]  flex flex-col h-[300px]  border-[#e1e0e0] border-t-[1px]">
        <div className="h-[80px] w-full  flex items-center text-[20px] font-medium">
          Things to know
        </div>

        <div className="h-[200px] w-full  flex items-center justify-between">
          {data?.map((props: any) => (
            <div className="h-[180px] w-[350px] flex justify-between flex-col">
              <div className="text-[14px] font-semibold">{props.title}</div>
              <div className="h-[100px] flex flex-col justify-between">
                <div className="text-[14px]">{props.first}</div>
                <div className="text-[14px]">{props.second}</div>
                <div className="text-[14px]">{props.third}</div>
              </div>
              <div className="text-[14px] font-semibold underline">{props.more}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* main */}
    </div>
  );
};

export default Rules;

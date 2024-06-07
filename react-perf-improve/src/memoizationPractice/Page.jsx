import {
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

const Profile = memo(function Profile({ person }) {
  return <></>;
});

const SetCounterFromChild = memo(
  forwardRef(({}, ref) => {
    useImperativeHandle(
      ref,
      () => {
        return {
          refInvoked() {},
        };
      },
      []
    );
    useEffect(() => {}, []);
    return <></>;
  })
);

function Page() {
  const ref = useRef(null);

  const handleClickMe = () => {
    ref.current.refInvoked();
  };

  return (
    <>
      <button onClick={handleClickMe}>Click me</button>
      <SetCounterFromChild handleClick={handleClickMe} ref={ref} />
    </>
  );
}

export default Page;

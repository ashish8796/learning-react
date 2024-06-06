import {
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

const Profile = memo(function Profile({ person }) {
  console.log("Log in Profile");
  return <></>;
});

const SetCounterFromChild = memo(
  forwardRef(({}, ref) => {
    useImperativeHandle(
      ref,
      () => {
        return {
          refInvoked() {
            console.log("Ref is invoked.");
          },
        };
      },
      []
    );
    useEffect(() => {
      console.log("Log in child.");
    }, []);
    return <></>;
  })
);

function Page() {
  const ref = useRef(null);

  const handleClickMe = () => {
    ref.current.refInvoked();
  };

  useEffect(() => {
    console.log("Log in parent.");
    console.log(ref.current);
  }, []);

  return (
    <>
      {/* <button onClick={handleChangePerson}>Change person</button> */}

      {/* <Profile person={person} /> */}
      <button onClick={handleClickMe}>Click me</button>
      <SetCounterFromChild handleClick={handleClickMe} ref={ref} />
    </>
  );
}

export default Page;

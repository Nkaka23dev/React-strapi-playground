export default function ModalDialog() {
  return (
    <div className="h-screen grid w-full bg-gray-400  opacity-80 fixed inset-0">
      <div className="max-w-2xl w-full m-auto bg-white px-10">
        <h1 className="text-xl font-semibold py-4 text-center">
          Modal Content
        </h1>
        <div className="py-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius est,
          nisi eos corrupti placeat aperiam, ullam exercitationem officiis aut
          sapiente debitis praesentium alias, saepe illo quos adipisci rerum
          autem numquam!
        </div>
        <div className="py-2">
          <button className="py-1 px-4 text-white bg-blue-500 hover:bg-blue-700 duration-500">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

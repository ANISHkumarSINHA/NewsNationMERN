import RenderSteps from "./RenderSteps"

export default function AddCourse() {
  return (
    <>
      <div className="flex w-full items-start gap-x-6">
        <div className="flex flex-1 flex-col">
          <h1 className="mb-14 text-3xl font-medium text-richblack-5">
            Add Report
          </h1>
          <div className="flex-1">
            <RenderSteps />
          </div>
        </div>
        {/* Course Upload Tips */}
        <div className="sticky top-10 hidden max-w-[400px] flex-1 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 xl:block">
          <p className="mb-8 text-lg text-richblack-5">⚡Uploading Tips</p>
          <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5">
            <li>Ink of Integrity, Voice of the People.</li>
            <li>Beyond the Byline: Journalism that Resonates.</li>
            <li>Penning the Present, Shaping the Future.</li>
            <li>Empowering Minds, One Story at a Time.</li>
            <li>
            Lights on, Truths Revealed: Journalism Unleashed.
            </li>
            <li>
            Beyond the News, Embracing Perspectives.
            </li>
            <li>Words Matter: Empowering through Journalism.</li>
            <li>More Than News: Narrating the Human Experience.</li>
            
          </ul>
        </div>
      </div>
    </>
  )
}

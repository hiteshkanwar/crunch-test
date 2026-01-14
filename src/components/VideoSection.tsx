export default function VideoSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h5 className="text-primary text-lg">
          NSAM-accredited • 4 unique workouts • 45 minutes • 16 participants •
          100% of exercises • Friendly fun
        </h5>
        <div className="relative bg-black rounded-lg overflow-hidden shadow-xl mt-4">
          <div className="aspect-video bg-gray-900">
            <iframe
              src="https://player.vimeo.com/video/1072629842"
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="HIIT Zone Video"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

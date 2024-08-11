

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";


const AlbumsList = () => {
  //get songs from soptify

  return (
    <>
      <ScrollArea>
        <div className="flex space-x-4 pb-4 ">

          <iframe src="https://open.spotify.com/embed/playlist/6HmFBfajogM9HrBjlGXdgn?utm_source=generator" width="100%" height="500" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <iframe src="https://open.spotify.com/embed/playlist/4dFOtLVYjWGK3aieGQS0aE?utm_source=generator&theme=0" width="100%" height="500" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

          <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX186v583rmzp?utm_source=generator&theme=0" width="100%" height="500" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1E4uMbyRXvdu70?utm_source=generator" width="100%" height="500" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>


          <div className="overflow-hidden rounded-md  ">
          </div>

        
        </div>

        <ScrollBar orientation="horizontal" />

      </ScrollArea>

    </>
  );
}
export default AlbumsList;
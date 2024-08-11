

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";


const MusicList = () => {
  //get songs from soptify

  return (
    <>
      <ScrollArea>
        <div className="flex space-x-4 pb-4  ">
                <iframe    src="https://open.spotify.com/embed/track/51xHvAUYQfhY29GcGlBM0n?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                <iframe src="https://open.spotify.com/embed/track/4ihSmAhdSNshJcxJrRXtwy?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                <iframe    src="https://open.spotify.com/embed/track/5O7SV284GeCFqs0wGfpYqb?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                <iframe   src="https://open.spotify.com/embed/track/7sbooOC1q5ZXp7elNZZGSM?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                <iframe   src="https://open.spotify.com/embed/track/6uca1BHKM5wqzp6GYQRkpp?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
      

        <ScrollBar orientation="horizontal" />

      </ScrollArea>

    </>
  );
}
export default MusicList;
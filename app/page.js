
import { Button } from "@/components/ui/button"
import { Metadata } from "next"
import Image from "next/image"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { RxPlusCircled } from "react-icons/rx";
import Sidebar from "@/components/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import AlbumsList from "@/components/albumsList";
import { PodcastEmptyPlaceholder } from "@/components/podcast-empty-placeholder"
import { Music } from "lucide-react"
import MusicList from "@/components/musiclist"





export default function Home() {
// to get soptify data


  return (
    <>
      <Tabs defaultValue="music" className="w-full">
        {/* Tabs list */}
        <TabsList className="w-full justify-between mb-5">
         <div className="flex items-center justify-between">
         <TabsTrigger value="music" className="relative">
            Music
          </TabsTrigger>
          <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
          <TabsTrigger value="live" disabled>
            Live
          </TabsTrigger>
          </div>
          <div className="justify-end  mr-4">
            <Button>
              <RxPlusCircled className="mr-2 h-4 w-4" />
              Add music
            </Button>
          </div>
        </TabsList>

        {/* Tabs content */}
        <TabsContent value="music"
          className="border-none p-0 outline-none"
        >
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                Listen Now
              </h2>
              <p className="text-sm text-muted-foreground">
                Top picks for you. Updated daily.
              </p>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="relative">
          <AlbumsList />

          </div>
          <div className="mt-6 space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Made for You
            </h2>
            <p className="text-sm text-muted-foreground">
              Your personal playlists. Updated daily.
            </p>
          </div>
          <Separator className="my-4" />




          <div className="relative">
            <ScrollArea>
              <div className="flex space-x-4 pb-4">
              <div className="flex space-x-4 pb-4">
                {/* <div className="overflow-hidden rounded-md  ">
                  <img src="https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80" alt="Ornella Binni" className="w-35 h-35 object-cover" />
                  <div>
                    <h3 className="text-lg font-semibold">Ornella Binni</h3>
                    <p className="text-sm text-muted-foreground">Artist</p>
                  </div>
                </div> */}

              <MusicList />


              </div>
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </TabsContent>

        <TabsContent value="podcasts">
          <PodcastEmptyPlaceholder />
        </TabsContent>
      </Tabs>
    </>
  );
}
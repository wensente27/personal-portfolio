import { useLanyard } from "react-use-lanyard";
import Image from "next/image";

/* Import types */
import type { Activity } from "react-use-lanyard";

/* Import data */
import userId from "../data/user";

const Status: React.FC = () => {
  const { loading, status } = useLanyard({
    userId,
    socket: true,
  });

  const getActivity = () => {
    if (status?.listening_to_spotify === true) {
      const { song, artist, album } = status.spotify || {};

      return {
        name: song,
        details: `by ${artist}`,
        state: `on ${album}`,
      };
    } else return status?.activities.at(-1);
  };

  const getImage = () => {
    if (!loading && status?.listening_to_spotify === true) {
      const activity = status.spotify;

      return {
        largeImage: activity?.album_art_url,
      };
    } else {
      const activity = getActivity() as Activity;

      const { application_id } = activity || {};
      const { large_image, small_image } = activity?.assets || {};

      const [largeImage, smallImage] = [
        large_image &&
          `https://cdn.discordapp.com/app-assets/${application_id}/${large_image}.png?size=256`,
        small_image &&
          `https://cdn.discordapp.com/app-assets/${application_id}/${small_image}.png?size=256`,
      ];

      return {
        largeImage,
        smallImage,
      };
    }
  };

  if (loading === false && status?.discord_status === "offline")
    return <div className="text-white">Currently Offline 😴</div>;
  else
    return (
      <>
        {loading === false ? (
          <div className="flex items-center w-3/4 p-4 space-x-4 bg-[#18191C] text-white rounded-lg">
            <div className="relative flex-shrink-0">
              {getImage().largeImage && (
                <Image
                  src={getImage().largeImage || ""}
                  width="100px"
                  height="100px"
                  alt="icon"
                  draggable="false"
                  className="rounded-lg"
                />
              )}

              {getImage().smallImage && (
                <div
                  className="absolute rounded-full -bottom-1 -right-1 ring-[#18191C] ring-2"
                  style={{ height: "30px", width: "30px" }}
                >
                  <Image
                    src={getImage().smallImage || ""}
                    width="30px"
                    height="30px"
                    alt="small icon"
                    draggable="false"
                    className="rounded-full"
                  />
                </div>
              )}
            </div>

            <div className="flex flex-col truncate">
              <h2 className="text-lg truncate">{getActivity()?.name}</h2>
              <div className="truncate text-[#737373]">{getActivity()?.details}</div>
              <div className="truncate text-[#737373]">{getActivity()?.state}</div>
            </div>
          </div>
        ) : (
          <div className="text-white">Loading...</div>
        )}
      </>
    );
};

export default Status;

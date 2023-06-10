import { Button, FloatButton, Image, Space, Spin } from "antd";
import { FC, useState } from "react";
import { useQuery } from "react-query";
import { getGalleryImages } from "services/gallery";
// assets
import { ArrowUpOutlined } from "@ant-design/icons";
// types
import { IUnsplashPhoto } from "types/unsplash-types";

const Gallery: FC = () => {
  const [page, setPage] = useState<number>(1);
  const [galleryPhotos, setGalleryPhotos] = useState<IUnsplashPhoto[]>([]);

  const { isLoading, isFetching } = useQuery(
    ["gallery", page],
    () => getGalleryImages({ count: 20, page }),
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      onSuccess: (data) => {
        if (page > 1) {
          setGalleryPhotos((prev) => [...prev, ...data]);
          return;
        }
        setGalleryPhotos(data);
      },
      onError: (error) => {
        console.log({ error });
      },
    }
  );
  const shouldShowLoadingMore = !isLoading && isFetching;
  if (isLoading)
    return (
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          height: "700px",
        }}
      >
        <Spin size="large" />
      </div>
    );
  return (
    <>
      <Space
        wrap
        style={{
          width: "100%",
          justifyContent: "space-around",
          gap: 20,
          marginTop: 20,
        }}
      >
        {galleryPhotos.map((photo) => {
          return (
            <Image
              key={photo.id}
              src={photo.urls.regular}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                maxWidth: "350px",
                boxShadow: "0 0 10px rgba(0,0,0,0.5)",
              }}
            />
          );
        })}
      </Space>
      <Space
        style={{
          justifyContent: "center",
          width: "100%",
          marginTop: 30,
          paddingBottom: 40,
        }}
      >
        {shouldShowLoadingMore ? (
          <Spin size="default" />
        ) : (
          <Button type="primary" onClick={() => setPage((prev) => prev + 1)}>
            Load more
          </Button>
        )}
      </Space>
      <FloatButton.BackTop
        duration={300}
        type="primary"
        icon={<ArrowUpOutlined />}
        visibilityHeight={300}
      />
    </>
  );
};

export default Gallery;

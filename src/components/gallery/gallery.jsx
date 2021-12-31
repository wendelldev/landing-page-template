import ImageGallery from "react-image-gallery";
import { Subtitle, Text, Title } from "../../shared/styled-components/text.styles";
import { GalleryContainer, GalleryRootContainer, GallerySection } from "./gallery.styles";


export const Gallery = (props) => {

  const imgs = [
    {
      original: "img/portfolio/01-large.jpg",
      thumbnail: "img/portfolio/01-small.jpg"
    },
    {
      original: "img/portfolio/02-large.jpg",
      thumbnail: "img/portfolio/02-small.jpg"
    },
    {
      original: "img/portfolio/03-large.jpg",
      thumbnail: "img/portfolio/03-small.jpg"
    },
    {
      original: "img/portfolio/04-large.jpg",
      thumbnail: "img/portfolio/04-small.jpg"
    },
    {
      original: "img/portfolio/05-large.jpg",
      thumbnail: "img/portfolio/05-small.jpg"
    },
    {
      original: "img/portfolio/06-large.jpg",
      thumbnail: "img/portfolio/06-small.jpg"
    },
    {
      original: "img/portfolio/07-large.jpg",
      thumbnail: "img/portfolio/07-small.jpg"
    },
    {
      original: "img/portfolio/08-large.jpg",
      thumbnail: "img/portfolio/08-small.jpg"
    },
    {
      original: "img/portfolio/09-large.jpg",
      thumbnail: "img/portfolio/09-small.jpg"
    }
  ]

  return (
    <GalleryRootContainer id='portfolio'>
      <GallerySection>
        <Title>Gallery</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
          dapibus leonec.
        </Text>
        <GalleryContainer>
          <ImageGallery items={imgs} />
        </GalleryContainer>
      </GallerySection>
    </GalleryRootContainer>
  )
}

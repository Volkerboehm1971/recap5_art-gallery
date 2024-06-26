import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function ArtPiecePreview({
  artPiece,
  favoriteArtPieceSlugs,
  onFavoriteButton,
}) {
  const reduceWidth = artPiece.dimensions.width * 0.2;
  const reduceHeight = artPiece.dimensions.height * 0.2;
  return (
    <>
      <article>
        <h3>{artPiece.name}</h3>
        <Image
          width={reduceWidth}
          height={reduceHeight}
          alt={`${artPiece.name} by ${artPiece.artist}`}
          src={artPiece.imageSource}
        />
        <p>Artist: {artPiece.artist}</p>
        <FavoriteButton
          artPiece={artPiece}
          favoriteArtPieceSlugs={favoriteArtPieceSlugs}
          onFavoriteButton={onFavoriteButton}
        />
        <Link href={`/art-pieces/${artPiece.slug}`}>Details</Link>
        <br />
        <Link href={"./"}>Back to the Home Page</Link>
      </article>
    </>
  );
}

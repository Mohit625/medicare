import { Card, CardContent } from "./../ui/card";
import { Badge } from "./../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./../ui/avatar";
const accessKey = '5PX_ng29uMxR2DIASZzfgRX67Xlz83ovTrvZ2niHHMc';
const unsplashUrl = `https://api.unsplash.com/photos/random?query=health&count=50&client_id=${accessKey}`;
const ArticleCard = ({
  title,
  description,
  author,
  date,
  readTime,
  category,
  categoryColor,
  image,
  imageAlt,
  featured = false,
}) => {
  const query = encodeURIComponent(category); 
const url = `https://api.unsplash.com/photos/random?query=${query}&client_id=5PX_ng29uMxR2DIASZzfgRX67Xlz83ovTrvZ2niHHMc`;
const photo = url.data;
console.log(photo);
  return (
    <Card
      className={`group cursor-pointer transition-all duration-300 hover:shadow-lg border-0 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className={`${featured ? "lg:flex" : ""}`}>
        <div className={`${featured ? "lg:w-2/5" : ""}`}>
          <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
            <img src={image} alt={category}></img>
          </div>
        </div>
        <CardContent
          className={`p-6 ${featured ? "lg:w-3/5 lg:flex lg:flex-col lg:justify-center" : ""}`}
        >
          <Badge variant="secondary" className={`mb-3 ${categoryColor} w-fit`}>
            {category}
          </Badge>
          <h3
            className={`font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors ${
              featured ? "text-2xl lg:text-3xl" : "text-xl"
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-gray-600 mb-4 ${
              featured ? "text-base lg:text-lg" : "text-sm"
            }`}
          >
            {description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback className="text-xs">
                  {author.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {author.name}
                </p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              {date} • {readTime}
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default ArticleCard;

export const useMenuState = () => useState(() => false);

export const openChat = () => useState(() => false);

export const useLoaderState = () => useState(() => false);

export const useLinkState = () =>
  useState(() => [
    {
      name: "car repair",
      path: "/",
    },
    {
      name: "flight",
      path: "/",
    },
    {
      name: "cleaning agency",
      path: "/",
    },
    {
      name: "spare part",
      path: "/",
    },
    {
      name: "maritime",
      path: "/",
    },
  ]);

export const productState = () =>
  useState(() => [
    {
      id: 1,
      name: "camshaft",
      category: "shaft",
      description: "camshaft",
      qualities: ["good", "awesome", "quality"],
      imgName: "camshaft",
      imageUrl: "assets/car-engines/camshaft.jpeg",
      imgExt: "jpeg",
    },
    {
      id: 2,
      name: "car generator",
      category: "car generator",
      description: "car generator",
      qualities: ["good", "awesome", "quality"],
      imgName: "car-generator",
      imageUrl: "car-generator.png",
      imgExt: "png",
    },
    {
      id: 3,
      name: "car key",
      category: "car key starter",
      description: "car key",
      qualities: ["good", "awesome", "quality"],
      imgName: "car-key",
      imageUrl: "car-key.jpeg",
      imgExt: "jpeg",
    },
    {
      id: 4,
      name: "crank shaft",
      category: "shaft",
      description: "crank shaft",
      qualities: ["good", "awesome", "quality"],
      imgName: "crank-shaft",
      imageUrl: "crank-shaft.jpg",
      imgExt: "jpg",
    },
    {
      id: 5,
      name: "crank shaft",
      category: "shaft",
      description: "crank shaft",
      qualities: ["good", "awesome", "quality"],
      imgName: "crank-shaft-1",
      imageUrl: "crank-shaft-1.jpg",
      imgExt: "jpg",
    },
    {
      id: 6,
      name: "car key starter",
      category: "car key stater",
      description: "car key starter",
      qualities: ["good", "awesome", "quality"],
      imgName: "car-key-starter-1",
      imageUrl: "car-key-starter-1.jpeg",
      imgExt: "jpeg",
    },
    {
      id: 7,
      name: "crank shaft",
      category: "shaft",
      description: "crank shaft",
      qualities: ["good", "awesome", "quality"],
      imgName: "crank-shaft-2",
      imageUrl: "crank-shaft-2.jpg",
      imgExt: "jpg",
    },
    {
      id: 8,
      name: "crank shaft",
      category: "shaft",
      description: "crank shaft",
      qualities: ["good", "awesome", "quality"],
      imgName: "crank-shaft-3",
      imageUrl: "crank-shaft-3.jpg",
      imgExt: "jpg",
    },
    {
      id: 9,
      name: "crank shaft",
      category: "shaft",
      description: "crank shaft",
      qualities: ["good", "awesome", "quality"],
      imgName: "crank-shaft-4",
      imageUrl: "crank-shaft-4.jpg",
      imgExt: "jpg",
    },
    {
      id: 10,
      name: "engine",
      category: "engine",
      description: "engine",
      qualities: ["good", "awesome", "quality"],
      imgName: "engine",
      imageUrl: "engine.jpg",
      imgExt: "jpg",
    },
    {
      id: 11,
      name: "engine",
      category: "engine",
      description: "engine",
      qualities: ["good", "awesome", "quality"],
      imgName: "engine",
      imageUrl: "engine.jpg",
      imgExt: "jpg",
    },
    {
      id: 12,
      name: "engine",
      category: "shaft",
      description: "engine",
      qualities: ["good", "awesome", "quality"],
      imgName: "engine-1",
      imageUrl: "engine-1.jpg",
      imgExt: "jpg",
    },
  ]);

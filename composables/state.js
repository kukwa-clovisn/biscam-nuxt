// importing temporal product assets while integrating database
// importing shafts
import shaft1 from "assets/car-engines/shaft/shaft-1.png";
import shaft2 from "assets/car-engines/shaft/shaft-3.png";
import shaft3 from "assets/car-engines/shaft/shaft-5.png";
import shaft4 from "assets/car-engines/shaft/shaft-6.png";
import crankshaft from "assets/car-engines/shaft/crank-shaft.jpg";
import crankshaft1 from "assets/car-engines/shaft/crank-shaft-1.jpg";
import crankshaft2 from "assets/car-engines/shaft/crank-shaft-2.jpg";
import crankshaft3 from "assets/car-engines/shaft/crank-shaft-3.jpg";
import crankshaft4 from "assets/car-engines/shaft/crank-shaft-4.jpg";
import camshaft from "assets/car-engines/shaft/camshaft.jpeg";

// importing car key starters
import carkeystarter1 from "assets/car-engines/car-key-starter/car-key-starter-1.jpeg";
import carkeystarter2 from "assets/car-engines/car-key-starter/car-key.jpeg";
import carkeystarter3 from "assets/car-engines/car-key-starter/key-starter-1.jpg";
import carkeystarter4 from "assets/car-engines/car-key-starter/key-starter.png";
import carkeystarter5 from "assets/car-engines/car-key-starter/key-starter-2.jpg";

// importing manifold images
import manifold from "assets/car-engines/manifold/manifold-1-transparent.png";
import manifold1 from "assets/car-engines/manifold/manifold.jpeg";

// importing engine images
import engine from "assets/car-engines/engine/engine-.png";
import engine1 from "assets/car-engines/engine/engine-1.png";
import engine2 from "assets/car-engines/engine/engine-2.png";
import engine3 from "assets/car-engines/engine/engine-3.jpg";
import engine4 from "assets/car-engines/engine/engine-block-transparent.png";

// importing car generators
import cargenerator from "assets/car-engines/car-generator/car-generator.png";

// importing top cylinders
import topcylinder from "assets/car-engines/top-cylinder/top-cylinder.png";
import topcylinder1 from "assets/car-engines/top-cylinder/top-cylinder-1.jpg";
import topcylinder2 from "assets/car-engines/top-cylinder/top-cylinder-2.jpg";
import topcylinder3 from "assets/car-engines/top-cylinder/top-cylinder-3.jpg";
import topcylinder4 from "assets/car-engines/top-cylinder/top-cylinder-4.jpg";
import topcylinder5 from "assets/car-engines/top-cylinder/top-cylinder-5.jpg";

// creating a random funtion to generate random ids

let productid = (n) => (Math.random() * n * 100).toString("36");

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
      id: "12.pcvvqtwhoi",
      name: "top cylinder",
      category: "top cylinder",
      description: "top cylinder",
      imageUrl: topcylinder,
    },
    {
      id: "h.hi63q86pdt",
      name: "top cylinder",
      category: "top cylinder",
      description: "top cylinder",
      imageUrl: topcylinder1,
    },
    {
      id: "28.pd2grcb3sfgsf",
      name: "top cylinder",
      category: "top cylinder",
      description: "top cylinder",
      imageUrl: topcylinder2,
    },
    {
      id: "3.sbvof1nxxg ",
      name: "top cylinder",
      category: "top cylinder",
      description: "top cylinder",
      imageUrl: topcylinder3,
    },
    {
      id: "9.8da6a9w0gm ",
      name: "top cylinder",
      category: "top cylinder",
      description: "top cylinder",
      imageUrl: topcylinder4,
    },
    {
      id: "y.9n92xyzmvg",
      name: "top cylinder",
      category: "top cylinder",
      description: "top cylinder",
      imageUrl: topcylinder5,
    },
    {
      id: "1b.o8484vfbnn",
      name: "manifold",
      category: "manifold",
      description: "manifold",
      imageUrl: manifold,
    },
    {
      id: "1g.9hjozssx3",
      name: "manifold",
      category: "manifold",
      description: "manifold",
      imageUrl: manifold1,
    },
    {
      id: "1e.yj27vl13gh",
      name: "camshaft",
      category: "shaft",
      description: "camshaft",
      imageUrl: shaft1,
    },
    {
      id: "24.8j5aq21vq",
      name: "camshaft",
      category: "shaft",
      description: "camshaft",
      imageUrl: shaft2,
    },
    {
      id: "w.otxkyt7my",
      name: "camshaft",
      category: "shaft",
      description: "camshaft",
      imageUrl: shaft3,
    },
    {
      id: "2k.fm5w8933i",
      name: "camshaft",
      category: "shaft",
      description: "camshaft",
      imageUrl: shaft4,
    },

    {
      id: "2i.vx6mn4igs",
      name: "camshaft",
      category: "shaft",
      description: "camshaft",
      imageUrl: camshaft,
    },
    {
      id: "9.a2tlhs1427",
      name: "car generator",
      category: "car generator",
      description: "car generator",
      imageUrl: cargenerator,
    },
    {
      id: "23.e0du8nod6",
      name: "car key",
      category: "car key starter",
      description: "car key",

      imageUrl: carkeystarter1,
    },
    {
      id: "1x.jswzlgl06",
      name: "crank shaft",
      category: "shaft",
      description: "crank shaft",

      imageUrl: crankshaft,
    },
    {
      id: "n.k8btyn02cb",
      name: "crank shaft",
      category: "shaft",
      description: "crank shaft",

      imageUrl: crankshaft1,
    },
    {
      id: "1e.zxykf502r",
      name: "car key starter",
      category: "car key starter",
      description: "car key starter",

      imageUrl: carkeystarter2,
    },
    {
      id: "12.gdh23ae95",
      name: "car key starter",
      category: "car key starter",
      description: "car key starter",

      imageUrl: carkeystarter3,
    },
    {
      id: "q.xhfx8va22",
      name: "car key starter",
      category: "car key starter",
      description: "car key starter",

      imageUrl: carkeystarter4,
    },
    {
      id: "p.bnh55kvw2k",
      name: "car key starter",
      category: "car key starter",
      description: "car key starter",

      imageUrl: carkeystarter5,
    },

    {
      id: "2.1u9dri18fm",
      name: "crank shaft",
      category: "shaft",
      description: "crank shaft",

      imageUrl: crankshaft1,
    },
    {
      id: "k.pnxbbm76i",
      name: "crank shaft",
      category: "shaft",
      description: "crank shaft",

      imageUrl: crankshaft2,
    },
    {
      id: "2d.1gcesgzns",
      name: "crank shaft",
      category: "shaft",
      description: "crank shaft",

      imageUrl: crankshaft3,
    },
    {
      id: "2g.h0sig40xy",
      name: "crank shaft",
      category: "shaft",
      description: "crank shaft",

      imageUrl: crankshaft4,
    },
    {
      id: "1h.61i2x885h",
      name: "engine",
      category: "engine",
      description: "engine",

      imageUrl: engine,
    },
    {
      id: "23.ppunzi5ks",
      name: "engine",
      category: "engine",
      description: "engine",

      imageUrl: engine1,
    },
    {
      id: "1e.t1h7awjv9f",
      name: "engine",
      category: "engine",
      description: "engine",
      imageUrl: engine3,
    },
    {
      id: "2m.aol3rdmlw",
      name: "engine",
      category: "engine",
      description: "engine",
      imageUrl: engine4,
    },
    {
      id: "1o.kh7vogki3i",
      name: "engine",
      category: "engine",
      description: "engine",
      imageUrl: engine2,
    },
  ]);

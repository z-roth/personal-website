import Head from "next/head";
import Link from "next/link";
import MenuItem from "../components/menu-item";

const Party = () => {
  return (
    <div className="p-6 fade-in-page">
      <Head>
        <title>welcome to flavortown!</title>
      </Head>
      <div className="p-6">
        <h1 className="text-6xl font-semibold">welcome to flavortown!</h1>
        <h2 className="text-4xl my-2">we hope you enjoy your stay.</h2>
        <Link href="https://open.spotify.com/playlist/39jSQmsm2xaPa23B5wiMDk?si=a6d51f87e31f4769&pt=448bf84281266fcdf024dd6c95fbeb85">
          <a className="text-2xl underline text-secondary">
            add to the collaborative playlist!
          </a>
        </Link>
        <h2 className="text-4xl mt-8 mb-2 font-semibold">quick rules</h2>
        <MenuItem
          title="please be courteous of our neighbors."
          description="our landlord lives upstairs - please be mindful!"
        />
        <MenuItem
          title="we only have one bathroom."
          description="please be quick! also, the door does not lock."
        />
        <MenuItem
          title="please stay inside of our apartment/porch"
          description="please do not hang out on the ground floor porch - it is not ours. additionally, please avoid congregating in the stairs!"
        />
        <MenuItem
          title="please stay out of the two rooms at the end of the hallway."
          description="however, you are welcome to hang out in zack or jacobus' rooms!"
        />
        <MenuItem
          title="please enjoy tonight responsibly"
          description="you know what this means :)"
        />
        <MenuItem
          title="have fun!!!"
          description="we hope you have a good time!"
        />
        <h2 className="text-4xl mt-8 font-semibold">menu</h2>
        <h4 className="text-xl mt-1">
          {"please consider donating via "}
          <Link href="https://venmo.com/zkr727?txn=pay&note=flavortown&amount=3.69">
            <a className="underline text-secondary">{`venmo`}</a>
          </Link>
          {" :)"}
        </h4>
        <MenuItem
          title="bay breeze"
          description="vodka, cranberry juice, pineapple juice"
        />
        <MenuItem
          title="moscow mule"
          description="ginger beer, vodka, hint of lime"
        />
        <MenuItem title="screwdriver" description="orange juice, vodka" />
        <MenuItem
          title="whiskey sour"
          description="shaken whiskey, lemon juice, simple syrup"
        />
        <MenuItem
          title="whiskey rickey"
          description="whiskey, lime, simple syrup"
        />
        <MenuItem
          title="sidecar"
          description="brandy, triple sec, lemon juice"
        />
        <MenuItem
          title="brandy rickey"
          description="brandy, triple sec, lemon juice"
        />
        <MenuItem
          title="margarita"
          description="silver tequila, lime juice, and triple sec"
        />
        <MenuItem
          title="matador"
          description="gold tequila, pineapple juice, lime juice"
        />
      </div>
    </div>
  );
};

export default Party;

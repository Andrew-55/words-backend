import { verbs } from "./dataset";

export const Resolvers = {
    Query: {
        getAllVerbs: () => verbs,
        getVerb: (_: any, args: any) => {
            console.log(args)
            return verbs.find(verb => verb.id === args.id)
        }
    }

}
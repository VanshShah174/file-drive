
import { mutation, query } from "./_generated/server";
import { v } from "convex/values"


// so what a mutation is it's basically an endpoint  that you can call from your front end
// react code and it's going to do some type of modification such as store an
// entry into the convexes database there's also a concept of a query that's basically if you need to fetch data from
// your convex database and then there's a third thing called an action and you use
// actions if you ever need to contact a third party library or a third party
// service such as like open Al um but we won't cover that just yet so when you
// make a mutation vou can pass in some
export const createFile = mutation({
    args: {
        name: v.string(),
    },
    async handler(ctx,args) {
        await ctx.db.insert("files",{
            name: args.name,
        })
    }
})


export const getFiles = query({
    args: {},
    async handler(ctx,args){
        return ctx.db.query("files").collect;
    }
})
import { type ReactNode } from 'react';

interface IList<T>{
    items : T[],
    renderItem : (category : T, ind? : number) => ReactNode
}
function List<T>({items, renderItem}:IList<T>){
    return (
    <div className="grid grid-cols-1 480:grid-cols-2 md:grid-cols-3 gap-4 container py-6">
      {items.length ? (
        items.map(renderItem)
      ) : (
        <p className="text-black text-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-sans mx-auto">
          Not Founded
        </p>
      )}
    </div>
    );
};

export default List;
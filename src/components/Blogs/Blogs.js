import React from 'react';

const Blogs = () => {
    return (
        <div className='p-24 text-justify'>
            <h2 className='text-blue-700 font-semibold text-2xl mb-4'>What is context api? why we use it?</h2>
            <p className='mb-14 mx-14'>Context api is one of the most important topic in react, which minimize the code and works. Conext Api help to make global variable which can be passed around. This is another solution to prop drilling or props sending from grandparent to child also to parent, and many more. Context is made for share date that count as global for tree of react components. Using context api we don't need to pass prop in every level, simply we could access data at different levels of the component tree. We can send props from app to any component or child component.</p>

            <h2 className='text-blue-700 font-semibold text-2xl mb-4'>What is semantic tag? Explain with example?</h2>
            <p className='mx-14'>Let's put it simpley, semantic tag describe the code or tag. Semantic means it provides meaning in language or logic.It is more appropriate on describing tag clearly rather than presentation. For example, In any common website we have header section on top, in middle we have main, at the end there is footer tag, which is an example of semantic tag. This help a person to understand the code of that layout, even a new person working on that code.</p>
        </div>

        
    );
};

export default Blogs;
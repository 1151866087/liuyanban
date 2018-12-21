
/* 
    comments.js 
    作用：存放 用户名和留言的数据
 */
var comments = [
    {
        name: 'jack',
        content: 'hello rose'
    },
    {
        name: 'rose',
        content: 'hello jack'
    },
    {
        name: '张三',
        content: 'hello rose'
    },
    {
        name: '老王',
        content: 'hello rose'
    },
]


// 1. module.exports
// 导出一个
/* 
{ comments:
   [ 
     { name: 'jack', content: 'hello rose' },
     { name: 'rose', content: 'hello jack' },
     { name: '张三', content: 'hello rose' },
     { name: '老王', content: 'hello rose' }
   ] 
}
*/
// module.exports = {
//     comments: comments
// }

// 2. exports
// 导出多个
/* 
{ 
  comments:
   [ 
     { name: 'jack', content: 'hello rose' },
     { name: 'rose', content: 'hello jack' },
     { name: '张三', content: 'hello rose' },
     { name: '老王', content: 'hello rose' } 
    ],
  a: 10
}
*/
// var a = 10;
// exports.comments = comments;
// exports.a = a;

// 3. module.exports = comments;

module.exports = comments;

/* 
[ { name: 'jack', content: 'hello rose' },
  { name: 'rose', content: 'hello jack' },
  { name: '张三', content: 'hello rose' },
  { name: '老王', content: 'hello rose' } ]


*/

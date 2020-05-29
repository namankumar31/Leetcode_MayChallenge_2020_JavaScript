/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let degree = {};
    let graph = {};
    
    for(let i=0; i<numCourses; i++){
        degree[i] = 0;
    }
    
    for(let [course, prereq] of prerequisites){
        graph[prereq] = (graph[prereq] || []).concat(course);
        degree[course] = (degree[course] || 0) + 1;
    }
    
    let stack = [];
    let result = [];
    
    for(let [key,value] of Object.entries(degree)){
        if(value === 0)
            stack.push(key);
    }
    
    while(stack.length !== 0){
        let key = stack.pop();
        result.push(key);
        if(graph[key]){
            for(let neighbor of graph[key]){
                degree[neighbor]--;
                
                if(degree[neighbor] === 0)
                    stack.push(neighbor);
            }
        }
    }
    
    return result.length === numCourses;
};

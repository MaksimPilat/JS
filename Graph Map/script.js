const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth*2;
canvas.height = window.innerHeight*2;
canvas.style.width = window.innerWidth + 'px';
canvas.style.height = window.innerHeight + 'px';


window.onresize = function(){
    canvas.width = window.innerWidth*2;
    canvas.height = window.innerHeight*2;
    scene.render();
}

class Node{
    size = 40;
    isActive = true;
    text = '';
    arrows = {
        begin: [],
        end: [],
    };
    constructor(e){
        this.setCoord(e);
        this.render();
        scene.nodesToConnect.push(this);
    }
    setCoord(e){
        this.x = e.clientX;
        this.y = e.clientY;
    }
    render(){
        ctx.beginPath();
        ctx.arc(this.x*2, this.y*2, this.size, 0, Math.PI*2);
        if(this.isActive){
            ctx.fillStyle = '#b4f095';
        }
        else{
            ctx.fillStyle = '#d6d6d6';
        }
        ctx.lineWidth = 3;
        ctx.fill();
        ctx.stroke();
        ctx.font="bold 28px sans-serif";
        ctx.fillStyle = "#000000";
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = "40px";
        ctx.textAlign = "center";
        ctx.textBaseline="middle";
        ctx.fillText(`${this.text}`, this.x*2, this.y*2);

        for(let i = 0; i < this.arrows.begin.length; i++){
            this.arrows.begin[i].beginX = this.x;
            this.arrows.begin[i].beginY = this.y;
            this.arrows.begin[i].render();
        }
        for(let i = 0; i < this.arrows.end.length; i++){
            this.arrows.end[i].endX = this.x;
            this.arrows.end[i].endY = this.y;
            this.arrows.end[i].render();
        }
    }
    mouseIsOver(e){
        if(e.clientX > this.x - this.size/2 && e.clientX < this.x + this.size/2 && 
            e.clientY > this.y - this.size/2 && e.clientY < this.y + this.size/2){
            return true;
        }
    }
}

class Arrow{
    isOriented = true;
    isActive = false;
    constructor(node_1, node_2){
        this.setCoord(node_1, node_2);
        this.render();
    }
    setCoord(node_1, node_2){
        this.beginX = node_1.x;
        this.beginY = node_1.y;
        this.endX = node_2.x;
        this.endY = node_2.y;
    }
    render(){
        ctx.beginPath();
        if(this.isActive){
            ctx.fillStyle = '#b4f095';
        }
        else{
            ctx.fillStyle = '#000000';
        }
        ctx.moveTo(this.beginX*2, this.beginY*2);
        ctx.lineTo(this.endX*2, this.endY*2);
        ctx.stroke();
        
    }
}

class Scene{
    nodes = [];
    nodesToConnect = [];
    render(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.nodes.forEach(function(node){
            node.render();
        });
    }
    hasActiveNode(){
        return this.nodes.some(node => node.isActive);
    }
}


canvas.onmousedown = function(e){
    let isFound = false;

    if(e.shiftKey){
        scene.nodes.forEach(function(node){
            if(node.mouseIsOver(e)){
                isFound = true;
                if(scene.nodesToConnect.length < 2){
                    node.isActive = true;
                    scene.nodesToConnect.push(node);
                }
                else{
                    scene.nodesToConnect.shift().isActive = false;
                    node.isActive = true;
                    scene.nodesToConnect.push(node);
                }
            }
        });
    }
    else{
        scene.nodes.forEach(function(node){
            node.isActive = false;
            if(node.mouseIsOver(e) && !isFound){
                scene.nodesToConnect = [];
                node.isActive = true;
                isFound = true;
                scene.nodesToConnect.push(node);
                canvas.onmousemove = function(e){
                    node.setCoord(e);
                    scene.render();
                }
                canvas.onmouseup = function(){
                    canvas.onmousemove = null;
                }
            }
        });
    }
    if(!isFound){
        scene.nodesToConnect = [];
        scene.nodes.forEach(function(node){
            node.isActive = false;
        });
    }
    scene.render();
}

canvas.ondblclick = function(e){
    scene.nodes.push(new Node(e));
}

document.onkeydown = function(e){
    const nodeIndex = scene.nodes.indexOf(scene.nodes.find(function(node){return node.isActive}));
    const node = scene.nodes[nodeIndex];
    if (nodeIndex != -1){
        if(e.key == 'Delete'){
            scene.nodes.splice(nodeIndex, 1);
        }
        if(e.key == '+' && node.size < 200){
            node.size += 30;
        }
        if(e.key == '-' && node.size > 40){
            node.size -= 30;
        }
        if(e.keyCode == 13){
            const nodeInput = document.querySelector('.nodeInput');
            if(window.getComputedStyle(nodeInput, null).display == 'none'){
                nodeInput.style.display = 'block';
                nodeInput.querySelector('input').value = node.text;
                nodeInput.querySelector('input').focus();
                canvas.style.filter = 'blur(8px)';
            }
            else{
                node.text = nodeInput.querySelector('input').value;
                nodeInput.style.display = 'none';
                canvas.style.filter = '';
            }
        }
        if(e.key == '1' && scene.nodesToConnect.length == 2){
            let arrow = new Arrow(scene.nodesToConnect[0], scene.nodesToConnect[1]);
            scene.nodesToConnect[0].arrows.begin.push(arrow);
            scene.nodesToConnect[1].arrows.end.push(arrow);
        }
        if(e.key == '2' && scene.nodesToConnect.length == 2){
            let arrow = new Arrow(scene.nodesToConnect[1], scene.nodesToConnect[0]);
            scene.nodesToConnect[0].arrows.end.push(arrow);
            scene.nodesToConnect[1].arrows.begin.push(arrow);
        }
        if(e.key == '3' && scene.nodesToConnect.length == 2){
            let arrow = new Arrow(scene.nodesToConnect[0], scene.nodesToConnect[1]);
            arrow.isOriented = false;
            scene.nodesToConnect[0].arrows.begin.push(arrow);
            scene.nodesToConnect[0].arrows.end.push(arrow);
            scene.nodesToConnect[1].arrows.begin.push(arrow);
            scene.nodesToConnect[1].arrows.end.push(arrow);
        }
        scene.render();
    }
}



const scene = new Scene();






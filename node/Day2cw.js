
let customerName = "Madhav";
let customerComment = "The coffee was amazing and the service was excellent!";
let review = {
    name: customerName,
    comment: customerComment
};


function Message(reviewObj) {
  
    let nameUpper = reviewObj.name.toUpperCase();
    let shortComment = reviewObj.comment.substring(0, 20);
    console.log(`Thank you, ${nameUpper}! Your review: "${shortComment}..."`);
}

Message(review);



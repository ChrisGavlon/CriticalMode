puts "🎮 Seeding users..."
User.create(
    username: "Dark_Souls_Enjoyer", 
    prof_img: "https://melmagazine.com/wp-content/uploads/2021/01/66f-1.jpg", 
    bio: "YES", 
    password: "artorious123", 
    password_confirmation: "artorious123"
)
User.create(
    username: "Super_Mario64", 
    prof_img: "https://www.marioboards.com/data/avatars/o/6/6485.jpg?1583017690", 
    bio: "I love Videogames!", 
    password: "superstar", 
    password_confirmation: "superstar"
)
User.create(
    username: "EMMI", 
    prof_img: "https://pbs.twimg.com/media/E38727TXIAktYVM.jpg", 
    bio: "On the weekends I like to hunt for metroids on abandoned planets! ^.^", 
    password: "dread", 
    password_confirmation: "dread"
)
User.create(
    username: "Rider_from_Republic", 
    prof_img: "https://avatarfiles.alphacoders.com/276/thumb-1920-276835.jpg", 
    bio: "Radical dude!", 
    password: "slopes123", 
    password_confirmation: "slopes123"
)
User.create(
    username: "Smasher69", 
    prof_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvEKLB41di349nfQ1gvaPPsSO5fRuB847ZyQ&usqp=CAU", 
    bio: "Will smash your bros.", 
    password: "supersmash", 
    password_confirmation: "supersmash"
)

puts "🎮 Seeding games..."
Game.create(title: "Metroid Dread", img: "https://m.media-amazon.com/images/I/711XZxZMw-S._SL1500_.jpg", developer: "Mercury Steam, Nintendo", genre: "Action-adventure, Shooter")
Game.create(title: "Super Mario Odyssey", img: "https://cdn.discordapp.com/attachments/671167612582887442/915812421900308520/super-mario-odyssey-switch-hero.jpg", developer: "Nintendo", genre: "Action, Platformer, 3D")
Game.create(title: "Riders Republic", img: "https://www.psu.com/wp/wp-content/uploads/2021/10/Riders-Republic-ps4-ps5-wallpapers-01.jpg", developer: "Ubisoft", genre: "Sports")
Game.create(title: "Dark Souls III", img: "https://cdn.akamai.steamstatic.com/steam/apps/374320/capsule_616x353.jpg?t=1636678210", developer: "From Software", genre: "Action RPG")
Game.create(title: "Super Smash Bros. Ultimate", img: "https://cdn.discordapp.com/attachments/671167612582887442/915836969311928341/super-smash-bros-ultimate-switch-hero.jpg", developer: "Nintendo", genre: "Fighting, Platformer")
Game.create(title: "Kingdom Hearts", img: "http://diskingdom.com/wp-content/uploads/2017/06/kh2_mury.jpg", developer: "Square Enix", genre: "Action RPG")
Game.create(title: "Kingdom Hearts II", img: "https://commondatastorage.googleapis.com/images.pricecharting.com/AMIfv96tRRSL_qTtehVw_LOZe3xI-m5rYa_XMo40--IpA3oHZwiEJUiEbCLK6Wby4wmaZKod2HmgzSfd08j8WIElSmV49IJ-iGMVepHsF64jHthLrQkvw4L5-xSmYQf5Jk5mv0a0cKe0c9I3ycpS6OuL1LDjwphnwg/240.jpg", developer: "Square Enix", genre: "Action RPG")
Game.create(title: "Resident Evil VII", img: "https://www.residentevil.com/village/assets/images/common/share.png", developer: "Capcom", genre: "Action, Survival")
Game.create(title: "Chrono Trigger", img: "https://static.wikia.nocookie.net/chrono/images/1/1e/Chrono_Trigger_Artwork1.jpg/revision/latest?cb=20090311222344", developer: "Square Enix", genre: "RPG")
Game.create(title: "Returnal", img: "https://image.api.playstation.com/vulcan/ap/rnd/202011/0415/baDQkNRWTpSLNwtdHbw09SUs.jpg", developer: "Housemarque", genre: "Roguelike, Third-person shooter")

puts "🎮 Seeding reviews..."
Review.create(
    score: 10,
    title: "Metroid is Back", 
    body: "It was difficult to explain to them how the diagnosis of certain death had actually given him life. While everyone around him was in tears and upset, he actually felt more at ease. The doctor said it would be less than a year. That gave him a year to live, something he'd failed to do with his daily drudgery of a routine that had passed as life until then.
    The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.", 
    user_id: 3, 
    game_id: 1
)
Review.create(
    score: 7, 
    title: "This is a Good Mario Game", 
    body: "It was difficult to explain to them how the diagnosis of certain death had actually given him life. While everyone around him was in tears and upset, he actually felt more at ease. The doctor said it would be less than a year. That gave him a year to live, something he'd failed to do with his daily drudgery of a routine that had passed as life until then.
    The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.", 
    user_id: 2, 
    game_id: 2
)
Review.create(
    score: 8, 
    title: "A Surprisingly Good Sports Game!", 
    body: "It was difficult to explain to them how the diagnosis of certain death had actually given him life. While everyone around him was in tears and upset, he actually felt more at ease. The doctor said it would be less than a year. That gave him a year to live, something he'd failed to do with his daily drudgery of a routine that had passed as life until then.
    The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.", 
    user_id: 4, 
    game_id: 3
)
Review.create(
    score: 9, 
    title: "Prepare to Die", 
    body: "It was difficult to explain to them how the diagnosis of certain death had actually given him life. While everyone around him was in tears and upset, he actually felt more at ease. The doctor said it would be less than a year. That gave him a year to live, something he'd failed to do with his daily drudgery of a routine that had passed as life until then.
    The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.", 
    user_id: 1, 
    game_id: 4
)
Review.create(
    score: 9, 
    title: "Smash with Your Bros!", 
    body: "It was difficult to explain to them how the diagnosis of certain death had actually given him life. While everyone around him was in tears and upset, he actually felt more at ease. The doctor said it would be less than a year. That gave him a year to live, something he'd failed to do with his daily drudgery of a routine that had passed as life until then.
    The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.", 
    user_id: 5, 
    game_id: 5
)


puts "🎮 Seeding comments..."
Comment.create(body: "It wasn't that he hated her. It was simply that he didn't like her much. It was difficult for him to explain this to her, and even more difficult for her to truly understand. She was in love and wanted him to feel the same way. He didn't, and no matter how he tried to explain to her she refused to listen or to understand.", likes: 0, dislikes: 0, user_id: 1, review_id: 1)
Comment.create(body: "It wasn't that he hated her. It was simply that he didn't like her much. It was difficult for him to explain this to her, and even more difficult for her to truly understand. She was in love and wanted him to feel the same way. He didn't, and no matter how he tried to explain to her she refused to listen or to understand.", likes: 0, dislikes: 0, user_id: 3, review_id: 2)
Comment.create(body: "It wasn't that he hated her. It was simply that he didn't like her much. It was difficult for him to explain this to her, and even more difficult for her to truly understand. She was in love and wanted him to feel the same way. He didn't, and no matter how he tried to explain to her she refused to listen or to understand.", likes: 0, dislikes: 0, user_id: 5, review_id: 3)
Comment.create(body: "It wasn't that he hated her. It was simply that he didn't like her much. It was difficult for him to explain this to her, and even more difficult for her to truly understand. She was in love and wanted him to feel the same way. He didn't, and no matter how he tried to explain to her she refused to listen or to understand.", likes: 0, dislikes: 0, user_id: 2, review_id: 4)
Comment.create(body: "It wasn't that he hated her. It was simply that he didn't like her much. It was difficult for him to explain this to her, and even more difficult for her to truly understand. She was in love and wanted him to feel the same way. He didn't, and no matter how he tried to explain to her she refused to listen or to understand.", likes: 0, dislikes: 0, user_id: 4, review_id: 5)

puts "✅ Done seeding!"
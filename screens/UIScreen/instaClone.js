import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import { useFonts } from 'expo-font';
import { Icon } from 'react-native-elements';

export default function instaClone({ navigation }) {
  const [stories] = useState([
    {
      name: 'Billy Turner',
      img: 'https://t4.ftcdn.net/jpg/01/15/85/23/240_F_115852367_E6iIYA8OxHDmRhjw7kOq4uYe4t440f14.jpg',
    },
    {
      name: 'Kelly Steward',
      img: 'https://t4.ftcdn.net/jpg/02/24/86/95/240_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg',
    },
    {
      name: 'Rasika Hale',
      img:  'https://image.freepik.com/free-photo/surprised-happy-girl-pointing-left-recommend-product-advertisement-make-okay-gesture_176420-20191.jpg',
    },
    {
      name: 'Eva Rivera',
      img: 'https://image.freepik.com/free-photo/beautiful-female-face-perfect-clean-skin-young-caucasian-woman-white-studio-background_155003-34301.jpg',
    },
    {
      name: 'Lisa Morgan',
      img: 'https://image.freepik.com/free-photo/close-up-portrait-nice-cute-adorable-smiling-charming-cheerful-girl-pointing-with-her-index-finger_176532-7923.jpg',
    },
    {
      name: 'Mark Burton',
      img:  'https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    
    {
      name: 'Juan Holland',
      img: 'https://images.pexels.com/photos/868113/pexels-photo-868113.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      name: 'Steven Mckinney',
      img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  ]);

  const [posts] = useState([
    {
      name: 'Denise Rose',
      username: 'denise_01',
      userImg: 'https://image.freepik.com/free-photo/pleased-handsome-businessman-pointing-person-making-good-point-nice-job-praising-employee-saying-well-done_176420-21751.jpg',
      postImg:
      'https://image.freepik.com/free-photo/beautiful-cherry-tree-with-flowers_23-2148956889.jpg',      
      desc: 'This is a sample post...',
      likedby: ['alexander'],
      timestamp: '10 minutes ago',
    },
    {
      name: 'Tomothy Ruiz',
      username: 'whoruiz',
      userImg:  'https://image.freepik.com/free-photo/portrait-elegant-brutal-man-wool-suit_149155-1582.jpg',
      postImg:
      'https://image.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg',
      desc: 'Food is a way to life',
      likedby: ['helena'],
      timestamp: '24 minutes ago',
    },
    {
      name: 'Holly Jimenez',
      username: 'jimenez_holly',
      userImg: 'https://randomuser.me/api/portraits/women/53.jpg',
      postImg:
        'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      desc: 'Dogs are best...',
      likedby: ['jane_doe'],
      timestamp: '46 minutes ago',
    },
  ]);

  const [suggestedUsers] = useState([
    {
      name: 'Calvin Barrett',
      userImg:  'https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      followerName: 'alice_10',
      followerCount: '2',
    },
    {
      name: 'Marvin Hunter',
      userImg: 'https://images.pexels.com/photos/2659177/pexels-photo-2659177.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      followerName: 'katie_me',
      followerCount: '6',
    },
    {
      name: 'Miguel Lucas',
      userImg:  'https://images.pexels.com/photos/374044/pexels-photo-374044.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      followerName: 'bryce192',
      followerCount: '7',
    },
    {
      name: 'Morris Wallace',
      userImg:  'https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      followerName: 'steven003',
      followerCount: '3',
    },

    {
      name: 'Hector Kelley',
      userImg: 'https://randomuser.me/api/portraits/men/35.jpg',
      followerName: 'its.manny',
      followerCount: '4',
    },
  ]);

  useEffect(() => {
    StatusBar.setBarStyle('dark-content', true);
  }, []);

   
    
   
    navigation.setOptions({
      headerTitle: 'Instagram',
      headerTitleStyle: {
        fontSize: 30,
        
      },
      headerLeft: () => (
        <Icon
          style={{ marginLeft: 14 }}
          name='camera'
          type='font-awesome'
          size={24}
        />
      ),
      headerRight: () => (
        <Icon
          style={{ marginRight: 14 }}
          name='paper-plane'
          type='font-awesome'
          size={24}
        />
      ),
    });

    function trimName(name) {
      let nameRest = name.split(' ').join('').slice(8);
      if (nameRest.length > 0) {
        return name.split(' ').join('').slice(0, 8).toLowerCase() + '...';
      }
      return name.split(' ').join('').slice(0, 8).toLowerCase();
    }

    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.storyView}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.storyHolder}>
                  <TouchableOpacity style={styles.storyUserTouchable}>
                    <Image
                      style={styles.storyUserImage}
                      source={{
                        uri:
                        'https://t4.ftcdn.net/jpg/02/24/86/95/240_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg',
                      }}
                    />
                    <View style={styles.storyPlusIcon}>
                      <Icon
                        name='plus-circle'
                        type='font-awesome'
                        color={'#70a1ff'}
                      />
                    </View>
                  </TouchableOpacity>
                  <Text style={styles.storyUsernameText}>Your Story</Text>
                </View>
                {stories.map((user) => (
                  <View style={styles.storyHolder}>
                    <Image
                      style={[
                        styles.storyUserImage,
                        {
                          borderWidth: 2,
                          borderColor: '#ff2316',
                          padding: 0,
                        },
                      ]}
                      source={{
                        uri: user.img,
                      }}
                    />
                    <Text style={styles.storyUsernameText}>
                      {trimName(user.name)}
                    </Text>
                  </View>
                ))}
              </ScrollView>
            </View>
            <View style={styles.contentView}>
              <View style={[styles.post, { marginTop: 0 }]}>
                <View style={styles.postHeader}>
                  <Image
                    style={styles.postUserImage}
                    source={{
                      uri: 'https://randomuser.me/api/portraits/men/46.jpg',
                    }}
                  />
                  <Text style={styles.postUsernameText}>Roy Kenned</Text>
                  <Icon name='ellipsis-h' type='font-awesome' />
                </View>
                <View style={styles.postContent}>
                  <Image
                    style={styles.postImage}
                    source={{
                      uri:
                        'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    }}
                  />
                </View>
                <View style={styles.postActions}>
                  <View style={styles.postActionsLeftView}>
                    <TouchableOpacity
                      style={[styles.postActionIcon, { paddingLeft: 0 }]}
                    >
                      <Icon name='heart' type='font-awesome-5' size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.postActionIcon}>
                      <Icon name='comment' type='font-awesome-5' size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.postActionIcon}>
                      <Icon
                        name='location-arrow'
                        type='font-awesome'
                        size={30}
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity>
                      <Icon name='bookmark' type='font-awesome-5' size={30} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.postDescView}>
                  <Text>
                    {'Liked by'}
                    <Text style={{ fontWeight: 'bold' }}>{' Marry '}</Text>
                    {'and'}
                    <Text style={{ fontWeight: 'bold' }}>{'20 others'}</Text>
                  </Text>
                  <View style={styles.postDescTextView}>
                    <Text style={styles.postDescUsernameText}>
                      Roy Kenned
                      <Text style={styles.postDescText}>
                        {
                          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quia odit asperiores!'
                        }
                      </Text>
                    </Text>
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Text style={{ color: '#333' }}>{`4 minutes ago`}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.suggestionsView}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                  }}
                >
                  <Text style={{ fontWeight: '500' }}>Suggested for you</Text>
                  <Text style={{ color: '#1e90ff', fontWeight: '500' }}>
                    See all
                  </Text>
                </View>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={{ marginTop: 10 }}
                >
                  {suggestedUsers.map((user) => (
                    <View
                      style={{
                        backgroundColor: '#fff',
                        paddingVertical: 4,
                        paddingHorizontal: 10,
                        borderWidth: 1,
                        borderColor: '#dfe4ea',
                        alignItems: 'center',
                        marginLeft: 10,
                      }}
                    >
                      <View style={{ width: '100%' }}>
                        <Icon
                          style={{ alignSelf: 'flex-end' }}
                          name='clear'
                          type='material'
                          size={20}
                        />
                      </View>
                      <Image
                        style={{ width: 90, height: 90, borderRadius: 100 }}
                        source={{
                          uri: user.userImg,
                        }}
                      />
                      <Text style={{ fontWeight: '500', marginTop: 6 }}>
                        {user.name}
                      </Text>
                      <Text
                        style={{
                          maxWidth: 80,
                          fontSize: 12,
                          color: '#666',
                          textAlign: 'center',
                          marginTop: 4,
                        }}
                      >
                        {`Followed by ${user.followerName} and ${user.followerCount} more`}
                      </Text>
                      <TouchableOpacity
                        style={{
                          width: '100%',
                          backgroundColor: '#1e90ff',
                          paddingVertical: 4,
                          marginTop: 8,
                          borderRadius: 4,
                        }}
                      >
                        <Text
                          style={{
                            color: '#fff',
                            fontWeight: '500',
                            alignSelf: 'center',
                          }}
                        >
                          Follow
                        </Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                  <View style={{ width: 30 }}></View>
                </ScrollView>
              </View>
              {posts.map((post) => (
                <View style={[styles.post, { marginTop: 10 }]}>
                  <View style={styles.postHeader}>
                    <Image
                      style={styles.postUserImage}
                      source={{
                        uri: post.userImg,
                      }}
                    />
                    <Text style={styles.postUsernameText}>{post.username}</Text>
                    <Icon name='ellipsis-h' type='font-awesome' />
                  </View>
                  <View style={styles.postContent}>
                    <Image
                      style={styles.postImage}
                      source={{
                        uri: post.postImg,
                      }}
                    />
                  </View>
                  <View style={styles.postActions}>
                    <View style={styles.postActionsLeftView}>
                      <TouchableOpacity
                        style={[styles.postActionIcon, { paddingLeft: 0 }]}
                      >
                        <Icon name='heart' type='font-awesome-5' size={30} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.postActionIcon}>
                        <Icon name='comment' type='font-awesome-5' size={30} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.postActionIcon}>
                        <Icon
                          name='location-arrow'
                          type='font-awesome'
                          size={30}
                        />
                      </TouchableOpacity>
                    </View>
                    <View>
                      <TouchableOpacity>
                        <Icon name='bookmark' type='font-awesome-5' size={30} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.postDescView}>
                    <Text>
                      {'Liked by'}
                      <Text
                        style={{ fontWeight: 'bold' }}
                      >{` ${post.likedby} `}</Text>
                      {'and'}
                      <Text style={{ fontWeight: 'bold' }}>{' 20 others'}</Text>
                    </Text>
                    <View style={styles.postDescTextView}>
                      <Text style={styles.postDescUsernameText}>
                        {`${post.username}`}
                        <Text style={styles.postDescText}>
                          {` ${post.desc}`}
                        </Text>
                      </Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                      <Text
                        style={{ color: '#333' }}
                      >{`${post.timestamp}`}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
            <View style={{ height: 300 }}></View>
          </View>
        </ScrollView>
        <View style={styles.bottomBar}>
          <TouchableOpacity style={{ flex: 1 }}>
            <Icon name='home' size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1 }}>
            <Icon name='search' size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1 }}>
            <Icon name='plus-square' type='font-awesome' size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1 }}>
            <Icon name='heart' type='font-awesome' size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
            <Image
              style={{ width: 30, height: 30, borderRadius: 100 }}
              source={{
                uri: 'https://t4.ftcdn.net/jpg/02/24/86/95/240_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {},
  bottomBar: {
    height: 50,
    borderTopWidth: 1,
    borderTopColor: '#dfe4ea',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  storyView: {
    paddingVertical: 4,
    marginTop: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  storyHolder: {
    paddingHorizontal: 10,
    alignItems: 'center',
    color:'blue',
  },
  storyUserTouchable: {
    position: 'relative',
  },
  storyUsernameText: {
    marginTop: 4,
  },
  storyUserImage: {
    height: 60,
    width: 60,
    borderRadius: 100,
  },
  storyPlusIcon: {
    position: 'absolute',
    bottom: -1,
    right: -1,
  },
  contentView: {
    marginTop: 4,
  },
  post: {
    borderWidth: 1,
    borderColor: '#f1f3f6',
  },
  postHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#dfe4ea',
    borderTopColor: '#dfe4ea',
    backgroundColor: '#fff',
  },
  postUserImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  postUsernameText: {
    flex: 1,
    marginLeft: 10,
  },
  postContent: {
    backgroundColor: '#fafafa',
  },
  postImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    resizeMode: 'contain',
  },
  postActions: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#dfe4ea',
    paddingVertical: 10,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postActionsLeftView: {
    display: 'flex',
    flexDirection: 'row',
  },
  postActionIcon: {
    paddingHorizontal: 6,
  },
  postDescView: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dfe4ea',
  },
  postDescText: {
    fontSize: 16,
    fontWeight: '300',
  },
  postDescUsernameText: {
    fontWeight: 'bold',
    marginTop: 6,
    fontSize: 16,
  },
  suggestionsView: {
    marginTop: 10,
  },
});



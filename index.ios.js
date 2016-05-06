/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

class reactBonjour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 == row2
      }),
      loaded: false
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(_url).then(res => res.json())
      .then(data => this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data.movies),
        loaded: true
      }))
      .done();
  }

  render() {
    if(this.state.loaded) return this.renderLoadingView();

    return (
      <ListView 
        dataSource={this.state.dataSource}
        renderRow={this.renderMovies}
        style={styles.listView}/>
    );
  }  

  renderLoadingView() {
    return (
      <View style={style.container}>
        
      </View>
    )
  }

  renderMovies() {}

    /*let movie = {
      title: 'Best day of my life',
      year: '2016',
      poster: 'https://img3.doubanio.com/view/movie_poster_cover/mpst/public/p2326492532.jpg'
    }
    return (
      <View style={styles.container}>
        <Image 
          source={{uri: movie.poster}}
          style={styles.posters} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }*/
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  posters: {
    width: 53,
    height: 81,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center'
  },
  year: {
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('reactBonjour', () => reactBonjour);

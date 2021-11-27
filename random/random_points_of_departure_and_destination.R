library(tidyverse)
# Load data

fin_df          <- readRDS('./data/finland_pop.rds')        
amenities_df    <- readRDS('./data/amenities_points.rds')  

# Grid size

GRIDSIZE <- 100

# Helper
cut_to_grid <- function(vect,limits) cut(vect,breaks=seq(from=limits[1],to=limits[2],length.out= GRIDSIZE + 1)) %>% as.integer # as.integer to get index of level instead of levels

# Limits

bbox_lon <- c(
    24.7827,
    25.25452
)

bbox_lat <- c(
    59.92248,
    60.29786
)


# Filter to HKI and make grid
population_hki <- fin_df %>% 
  filter(longitude > bbox_lon[1], 
    longitude < bbox_lon[2],
    latitude > bbox_lat[1],
    latitude < bbox_lat[2]
    )



population_hki$grid_lon <- cut_to_grid(population_hki$longitude ,bbox_lon)
population_hki$grid_lat <- cut_to_grid(population_hki$latitude  ,bbox_lat)


# Extract coords 
amenities_df$longitude <- sapply(amenities_df$geometry,function(geom) as.numeric(geom[1]))
amenities_df$latitude  <- sapply(amenities_df$geometry,function(geom) as.numeric(geom[2]))

# Filter to HKI
amenities_hki <- amenities_df %>% select('osm_id','longitude','latitude')  
 
with(amenities_hki, bool_mask <<- longitude > bbox_lon[1] & longitude < bbox_lon[2] &  latitude > bbox_lat[1] &   latitude < bbox_lat[2] )

amenities_hki <- amenities_df[bool_mask,c('osm_id','geometry','longitude','latitude')]

# Make grid 
amenities_hki$grid_lon <- cut_to_grid(amenities_hki$longitude, bbox_lon)
amenities_hki$grid_lat <- cut_to_grid(amenities_hki$latitude,  bbox_lat)


# Demo plot
p <- ggplot(data=population_hki,aes(x=longitude,y=latitude,color=as.factor(grid_lon))) + geom_point() + theme_bw()
p

## Aggregate to grid level and join

amenities_agg   <- amenities_hki    %>% group_by(grid_lon,grid_lat) %>% summarise(amenities=n(), .groups = "drop")
population_agg  <- population_hki   %>% group_by(grid_lon,grid_lat) %>% summarise(population=sum(fin_general_2020), .groups = "drop")

amenities_population <- full_join(amenities_agg,population_agg)
amenities_population[is.na(amenities_population)] <- 0

# Probatility for selecting a grid based on amenities / population
amenities_population$amenities_prob  <- amenities_population$amenities  / sum(amenities_population$amenities)
amenities_population$population_prob <- amenities_population$population / sum(amenities_population$population)

# Helper for sampling
get_random_grids <- function(prob_vect,n=1) sample(1:length(prob_vect),n,replace=TRUE,prob = prob_vect )

# Sample grids
samplesize <- 2000

departure_grids   <- get_random_grids(amenities_population$population_prob , samplesize)
destination_grids <- get_random_grids(amenities_population$amenities_prob  , samplesize)


# Demo plot 2

demodata <- amenities_population

# Count how many times a grid got chosen
demodata$count_pop_grid_chosen <- 0
demodata$count_pop_grid_chosen[1:max(departure_grids)] <- tabulate(departure_grids)

demodata$count_ame_grid_chosen <- 0
demodata$count_ame_grid_chosen[1:max(destination_grids)] <- tabulate(destination_grids)


p <- ggplot(data=demodata,aes(x=grid_lon,y=grid_lat,fill=count_pop_grid_chosen)) + geom_tile() + scale_fill_gradient(low='black',high='red')
p

p <- ggplot(data=demodata,aes(x=grid_lon,y=grid_lat,fill=count_ame_grid_chosen)) + geom_tile() + scale_fill_gradient(low='black',high='red')
p


